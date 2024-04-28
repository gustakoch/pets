<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use App\Trait\Pagination;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class UserController extends AbstractController
{
    use Pagination;

    public function __construct(
        private UserRepository $userRepository,
        private EntityManagerInterface $entityManager,
        private UserPasswordHasherInterface $passwordHasher,
    ) {
    }

    #[Route('/users', name: 'app_users')]
    public function index(Request $request): Response
    {
        $usersQuery = $this->userRepository->getUsersQuery();
        $pagerFanta = $this->pagerFantaPagination($usersQuery, $request->query->getInt('page', 1));

        return $this->render('user/index.html.twig', [
            'pager' => $pagerFanta,
        ]);
    }

    #[Route('/users/create', name: 'app_users_create')]
    public function create(Request $request): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $email = $form->get('email')->getData();
            if ($this->userRepository->checkIfUserExistsByEmail($email)) {
                $this->addFlash('userExists', sprintf('O usuário %s já existe no banco de dados.', $email));

                return $this->redirectToRoute('app_users_create');
            }
            $user = $form->getData();
            $user->setRoles($user->getRoles());
            $user->setPassword($this->passwordHasher->hashPassword($user, $form->get('password')->getData()));
            $this->entityManager->persist($user);
            $this->entityManager->flush();
            $this->addFlash('userCreated', sprintf('Usuário %s criado!', $user->getUsername()));

            return $this->redirectToRoute('app_users');
        }

        return $this->render('user/create.html.twig', [
            'form' => $form,
        ]);
    }

    #[Route('/users/{id}/edit', name: 'app_users_edit')]
    public function edit(Request $request, $id): Response
    {
        $user = $this->userRepository->find($id);
        $oldPassword = $user->getPassword();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $requestAll = $request->request->all();
            if (isset($requestAll['assignRoles']) && count($requestAll['assignRoles']) > 0) {
                $user->setRoles($requestAll['assignRoles']);
            }
            $user->setUsername($form->get('username')->getData());
            $user->setEmail($form->get('email')->getData());
            $user->setIsActive($form->get('isActive')->getData());
            $user->setPassword($oldPassword);
            $user->setUpdatedAt(new \DateTime());
            $this->entityManager->persist($user);
            $this->entityManager->flush();
            $this->addFlash('userUpdated', sprintf('Usuário %s atualizado!', $user->getUsername()));

            return $this->redirectToRoute('app_users');
        }

        return $this->render('user/edit.html.twig', [
            'form' => $form,
            'user' => $user,
        ]);
    }
}
