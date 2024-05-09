<?php

namespace App\Controller;

use App\Entity\Pet;
use App\Entity\User;
use App\Form\PetType;
use App\Repository\PetRepository;
use App\Repository\VeterinarianRepository;
use App\Service\CacheService;
use App\Service\UploadService;
use App\Trait\Pagination;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER')]
#[Route('/pets')]
class PetController extends AbstractController
{
    use Pagination;

    const CACHED_PETS_QUERY = 'cached_pets_query_';

    public function __construct(
        private EntityManagerInterface $entityManager,
        private UploadService $uploadService,
        private CacheService $cacheService,
        private PetRepository $petRepository,
        private VeterinarianRepository $veterinarianRepository,
    ) {
    }

    #[Route('', name: 'app_pets')]
    public function index(Request $request): Response
    {
        /** @var User $user */
        $user = $this->getUser();
        $petsQuery = $this->cacheService->handle(self::CACHED_PETS_QUERY.$user->getId(), 'App\Entity\Pet', $user);
        $form = $this->createForm(PetType::class, new Pet());
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $name = $form->get('name')->getData();
            $specie = $form->get('specie')->getData();
            $petsQuery = $this->petRepository->getPetsQuery($user, $name, $specie);
        }
        $pagerFanta = $this->pagerFantaPagination($petsQuery, $request->query->getInt('page', 1));

        return $this->render('pet/index.html.twig', [
            'form' => $form,
            'pager' => $pagerFanta,
        ]);
    }

    #[Route('/create', name: 'app_pets_create')]
    public function create(Request $request): Response
    {
        $pet = new Pet();
        $form = $this->createForm(PetType::class, $pet);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $requestData = $request->request->all();
            if (isset($requestData['pet']['veterinarians'])) {
                foreach ($requestData['pet']['veterinarians'] as $veterinarianId) {
                    $veterinarian = $this->veterinarianRepository->find((int) $veterinarianId);
                    $pet->addVeterinarian($veterinarian);
                }
            }
            /** @var User $user */
            $user = $this->getUser();
            $imageUploaded = $form->get('imageFile')->getData();
            if ($imageUploaded) {
                $pictureFileName = uniqid().'.'.$imageUploaded->guessExtension();
                $this->uploadService->picture($imageUploaded, '/public/images/pets', $pictureFileName);
                $pet->setImagePath('/images/pets/'.$pictureFileName);
            }
            $pet->setName($form->get('name')->getData());
            $pet->setSpecie($form->get('specie')->getData());
            $pet->setBreed($form->get('breed')->getData());
            $pet->setColor($form->get('color')->getData());
            $pet->setDateOfBirth($form->get('dateOfBirth')->getData());
            $pet->setUser($user);
            $this->entityManager->persist($pet);
            $this->entityManager->flush();
            $this->cacheService->clearCache(self::CACHED_PETS_QUERY.$user->getId());
            $this->addFlash('petCreated', sprintf('Pet %s cadastrado!', $pet->getName()));

            return $this->redirectToRoute('app_pets');
        }

        return $this->render('pet/create.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}/edit', name: 'app_pets_edit')]
    public function edit(Request $request, $id): Response
    {
        $pet = $this->petRepository->findOneBy(['id' => $id, 'user' => $this->getUser()]);
        if (!$pet) {
            throw new AccessDeniedHttpException('Você não tem acesso a essa página');
        }
        $form = $this->createForm(PetType::class, $pet);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $currentVeterinarians = $pet->getVeterinarians()->toArray();
            $requestData = $request->request->all()['pet'];
            if (isset($requestData['veterinarians'])) {
                foreach ($requestData['veterinarians'] as $veterinarianId) {
                    $veterinarian = $this->veterinarianRepository->find((int) $veterinarianId);
                    if (!$pet->getVeterinarians()->contains($veterinarian)) {
                        $pet->addVeterinarian($veterinarian);
                    }
                }
                foreach ($currentVeterinarians as $veterinarian) {
                    if (!in_array($veterinarian->getId(), $requestData['veterinarians'])) {
                        $pet->removeVeterinarian($veterinarian);
                    }
                }
            }
            /** @var User $user */
            $user = $this->getUser();
            $imageUploaded = $form->get('imageFile')->getData();
            if ($imageUploaded) {
                $pictureFileName = uniqid().'.'.$imageUploaded->guessExtension();
                $this->uploadService->picture($imageUploaded, '/public/images/pets', $pictureFileName);
                $pet->setImagePath('/images/pets/'.$pictureFileName);
            }
            $pet->setName($form->get('name')->getData());
            $pet->setSpecie($form->get('specie')->getData());
            $pet->setBreed($form->get('breed')->getData());
            $pet->setColor($form->get('color')->getData());
            $pet->setDateOfBirth($form->get('dateOfBirth')->getData());
            $pet->setUpdatedAt(new \DateTime());
            $this->entityManager->persist($pet);
            $this->entityManager->flush();
            $this->cacheService->clearCache(self::CACHED_PETS_QUERY.$user->getId());
            $this->addFlash('petUpdated', sprintf('Pet %s atualizado!', $pet->getName()));

            return $this->redirectToRoute('app_pets');
        }

        return $this->render('pet/edit.html.twig', [
            'pet' => $pet,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}/delete-image', name: 'app_pets_delete_image')]
    public function deleteImage($id): Response
    {
        $pet = $this->petRepository->findOneBy(['id' => $id, 'user' => $this->getUser()]);
        if (!$pet) {
            throw new AccessDeniedHttpException('Você não tem acesso a essa página');
        }
        $pet->setImagePath(null);
        $this->entityManager->persist($pet);
        $this->entityManager->flush();

        return $this->redirectToRoute('app_pets_edit', ['id' => $id]);
    }

    #[Route('/{id}/delete', name: 'app_pets_delete')]
    public function detele($id): Response
    {
        /** @var User $user */
        $user = $this->getUser();
        $pet = $this->petRepository->findOneBy(['id' => $id, 'user' => $this->getUser()]);
        if (!$pet) {
            throw new AccessDeniedHttpException('Você não tem acesso a essa página');
        }
        $pet->setDeletedAt(new \DateTime());
        $this->entityManager->persist($pet);
        $this->entityManager->flush();
        $this->cacheService->clearCache(self::CACHED_PETS_QUERY.$user->getId());
        $this->addFlash('petDeleted', sprintf('Pet %s removido!', $pet->getName()));

        return $this->redirectToRoute('app_pets');
    }

    #[Route('/{id}/show', name: 'app_pets_show')]
    public function info($id): Response
    {
        $user = $this->getUser();
        $pet = $this->petRepository->getPet($user, $id);

        return $this->render('pet/show.html.twig', [
            'pet' => $pet,
        ]);
    }

    #[Route('/veterinarian-info/{id}', name: 'app_pets_veterinarian_info')]
    public function veterinarianInfo($id): JsonResponse
    {
        try {
            $pet = $this->petRepository->findOneBy(['id' => $id, 'user' => $this->getUser()]);
            if (!$pet) {
                throw new \Exception('Você não tem acesso a essa página');
            }
            $veterinarians = $this->veterinarianRepository->getVeterinariansByPet($pet);
            if (!$veterinarians) {
                throw new \Exception(sprintf('Não foram localizados veterinários do pet %s', $pet->getName()));
            }
            $veterinariansData = [];
            foreach ($veterinarians as $veterinarian) {
                $veterinariansData[] = $veterinarian->serialize($veterinarian);
            }

            return $this->json([
                'ok' => true,
                'message' => '',
                'data' => $veterinariansData,
            ]);
        } catch (\Exception $e) {
            return $this->json([
                'ok' => false,
                'message' => $e->getMessage(),
                'data' => [],
            ]);
        }
    }
}
