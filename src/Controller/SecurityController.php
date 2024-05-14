<?php

namespace App\Controller;

use App\Entity\PasswordReset;
use App\Entity\User;
use App\Repository\PasswordResetRepository;
use App\Repository\UserRepository;
use App\Service\EmailService;
use App\Service\TokenService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Validator\Constraints as Assert;

class SecurityController extends AbstractController
{
    public const ROUTE_LOGIN = 'app_login';

    public function __construct(
        private UserRepository $userRepository,
        private EntityManagerInterface $entityManager,
        private EmailService $emailService,
        private TokenService $tokenService,
        private PasswordResetRepository $passwordResetRepository,
    ) {
    }

    #[Route('/login', name: self::ROUTE_LOGIN)]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        if ($this->getUser()) {
            return $this->redirectToRoute('app_admin');
        }
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', [
            'lastUsername' => $lastUsername,
            'error' => $error,
        ]);
    }

    #[Route('/activate-account', name: 'app_activate_account')]
    public function activateAccount(Request $request): Response
    {
        $token = $request->query->get('token');
        if (!$token) {
            return $this->redirectToRoute(self::ROUTE_LOGIN);
        }
        $user = $this->userRepository->findOneBy(['activationToken' => $token]);
        if (!$user instanceof User) {
            return $this->redirectToRoute(self::ROUTE_LOGIN);
        }
        $tokenDecoded = $this->tokenService->decode($token);
        if (isset($tokenDecoded['error'])) {
            throw new AccessDeniedHttpException($tokenDecoded['message']);
        }
        if ($user->getActivatedAt()) {
            $this->addFlash('linkExpired', sprintf('Link expirado! Sua conta foi ativada em %s', $user->getActivatedAt()->format('d/m/Y à\s H:i')));

            return $this->redirectToRoute(self::ROUTE_LOGIN);
        }
        $user->setIsActive(true);
        $user->setActivatedAt(new \DateTime());
        $this->entityManager->persist($user);
        $this->entityManager->flush();
        $this->addFlash('accountActivated', 'Parabéns! A sua conta foi verificada e está ativa para aproveitar os nossos serviços :)');

        return $this->redirectToRoute(self::ROUTE_LOGIN);
    }

    #[Route('/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    #[Route('/forgot-password', name: 'app_forgot_password')]
    public function forgotPassword(Request $request): Response
    {
        $form = $this->createFormBuilder()
            ->add('email', EmailType::class, [
                'label' => 'E-mail para recuperar',
                'required' => false,
                'constraints' => [
                    new Assert\NotBlank(message: 'Informe o e-mail para recuperar sua conta.'),
                    new Assert\Email(message: 'Este valor não é um endereço de e-mail válido'),
                ],
            ])
            ->getForm();
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $email = $form->get('email')->getData();
            $user = $this->userRepository->findOneBy(['email' => $email]);
            if (!$user instanceof User) {
                return $this->redirectToRoute('app_forgot_password');
            }
            $tokenPayload = [
                'user_id' => $user->getId(),
                'exp' => time() + 3600,
            ];
            $token = $this->tokenService->encode($tokenPayload);
            $passwordReset = new PasswordReset();
            $passwordReset->setUser($user);
            $passwordReset->setToken($token);
            $passwordReset->setExpireAt(new \DateTime('+1 hour'));
            $this->entityManager->persist($passwordReset);
            $this->entityManager->flush();

            $resetLink = $this->generateUrl(
                'app_reset_password', [
                    'token' => $token,
                ],
                UrlGeneratorInterface::ABSOLUTE_URL
            );
            $this->emailService->sendTemplatedEmail(
                'emails/reset-password.html.twig',
                $user->getEmail(),
                'PetsControl - Redefinição de senha',
                [
                    'resetLink' => $resetLink,
                    'user' => $user,
                ]
            );
            $this->addFlash('resetPasswordSent', 'Verifique seu e-mail!');

            return $this->redirectToRoute('app_forgot_password');
        }

        return $this->render('home/forgot-password.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/reset-password', name: 'app_reset_password')]
    public function resetPassword(Request $request, UserPasswordHasherInterface $hasher): Response
    {
        $token = $request->query->get('token');
        if (!$token) {
            return $this->redirectToRoute(self::ROUTE_LOGIN);
        }
        $tokenDecoded = $this->tokenService->decode($token);
        if (isset($tokenDecoded['error'])) {
            throw new AccessDeniedHttpException($tokenDecoded['message']);
        }
        $user = $this->userRepository->find($tokenDecoded['user_id']);
        if (!$user instanceof User) {
            return $this->redirectToRoute(self::ROUTE_LOGIN);
        }
        $passwordReset = $this->passwordResetRepository->findOneBy(['token' => $token]);
        if (!$this->tokenService->isPasswordResetValid($passwordReset, $user)) {
            throw new AccessDeniedHttpException('Token informado não é mais válido');
        }
        $form = $this->createFormBuilder()
            ->add('password', RepeatedType::class, [
                'type' => PasswordType::class,
                'constraints' => [
                    new Assert\NotBlank(message: 'Uma nova senha deve ser informada.'),
                    new Assert\Regex(pattern: '/^(?=.*[A-Z]).*$/', message: 'A senha deve incluir pelo menos uma letra maiúscula'),
                    new Assert\Regex(pattern: '/^(?=.*[a-z]).*$/', message: 'A senha deve incluir pelo menos uma letra minúscula'),
                    new Assert\Regex(pattern: '/^(?=.*[0-9]).*$/', message: 'A senha deve incluir pelo menos um número'),
                    new Assert\Regex(pattern: "/^(?=.*[!@#$%^&*(),.?'\x22:{}|<>]).*$/", message: 'A senha deve incluir pelo menos um caractere especial, ex., !@#?'),
                ],
                'invalid_message' => 'As senhas informadas não coincidem.',
                'options' => ['attr' => ['class' => 'password-field']],
                'required' => false,
                'first_options' => ['label' => 'Sua nova senha'],
                'second_options' => ['label' => 'Repita a nova senha'],
            ])
            ->getForm();
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $user->setPassword($hasher->hashPassword($user, $form->get('password')->getData()));
            $passwordReset->setUsedAt(new \DateTime());
            $this->entityManager->persist($user);
            $this->entityManager->flush();
            $this->emailService->sendTemplatedEmail(
                'emails/reset-password-confirmation.html.twig',
                $user->getEmail(),
                'PetsControl - Senha redefinida com sucesso',
                [
                    'user' => $user,
                ]
            );
            $this->addFlash('passwordUpdated', 'Sua senha foi redefinida com sucesso!');

            return $this->redirectToRoute(self::ROUTE_LOGIN);
        }

        return $this->render('security/reset-password.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
