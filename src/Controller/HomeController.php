<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegisterFormType;
use App\Repository\UserRepository;
use App\Service\EmailService;
use App\Service\TokenService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class HomeController extends AbstractController
{
    public function __construct(
        private UserRepository $userRepository,
        private EmailService $emailService,
        private TokenService $tokenService,
    ) {
    }

    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        return $this->redirectToRoute('app_login');
    }

    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $hasher, EntityManagerInterface $entityManager): Response
    {
        $user = new User();
        $form = $this->createForm(RegisterFormType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            if ($this->userRepository->findOneBy(['email' => $form->get('email')->getData()])) {
                $this->addFlash('emailExists', 'Oops! O e-mail informado já esta sendo usado, por favor, utilize outro.');

                return $this->redirectToRoute('app_register', [
                    'email' => $form->get('email')->getData(),
                ]);
            }
            $user->setUsername($form->get('username')->getData());
            $user->setEmail($form->get('email')->getData());
            $user->setPassword($hasher->hashPassword($user, $form->get('password')->getData()));
            $user->setRoles($user->getRoles());
            $user->setIsActive(false);
            $token = $this->tokenService->encode(['user_id' => $user->getId(), 'exp' => time() + (3600 * 24)]);
            $user->setActivationToken($token);
            $entityManager->persist($user);
            $entityManager->flush();
            $this->addFlash('userCreated', 'Parabéns! Sua conta foi criada com sucesso :)');

            $activationLink = $this->generateUrl('app_activate_account', ['token' => $user->getActivationToken()], UrlGeneratorInterface::ABSOLUTE_URL);
            $this->emailService->sendActivationEmail($user, $activationLink);

            return $this->redirectToRoute('app_register', [
                'email' => $user->getEmail(),
            ]);
        }

        return $this->render('home/register.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
