<?php

namespace App\Controller;

use App\Entity\Address;
use App\Entity\Veterinarian;
use App\Form\AddressType;
use App\Form\VeterinarianType;
use App\Repository\AddressRepository;
use App\Repository\CityRepository;
use App\Repository\VeterinarianRepository;
use App\Trait\Pagination;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER')]
class VeterinarianController extends AbstractController
{
    use Pagination;

    public function __construct(
        private VeterinarianRepository $veterinarianRepository,
        private CityRepository $cityRepository,
        private AddressRepository $addressRepository,
        private EntityManagerInterface $entityManager,
    ) {
    }

    #[Route('/veterinarians', name: 'app_vets')]
    public function index(Request $request): Response
    {
        $user = $this->getUser();
        $veterinarian = new Veterinarian();
        $form = $this->createForm(VeterinarianType::class, $veterinarian);
        $form->handleRequest($request);
        $vetsQuery = $this->veterinarianRepository->getVetsByUserQuery($user);
        if ($form->isSubmitted()) {
            $name = $form->get('name')->getData();
            $vetsQuery = $this->veterinarianRepository->getVetsByUserQuery($user, $name);
        }
        $pagerFanta = $this->pagerFantaPagination($vetsQuery, $request->query->getInt('page', 1));

        return $this->render('veterinarian/index.html.twig', [
            'form' => $form->createView(),
            'pager' => $pagerFanta,
        ]);
    }

    #[Route('/veterinarians/create', name: 'app_vets_create')]
    public function create(Request $request): Response
    {
        $veterinarian = new Veterinarian();
        $address = new Address();
        $form = $this->createFormBuilder()
            ->add('veterinarian', VeterinarianType::class, ['data' => $veterinarian])
            ->add('address', AddressType::class, ['data' => $address])
            ->getForm();
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $address = $form->getData()['address'];
            $requestData = $request->request->all();
            if (isset($requestData['city']) && !empty($requestData['city'])) {
                $city = $this->cityRepository->find((int) $requestData['city']);
                $address->setCity($city);
            }
            $user = $this->getUser();
            $veterinarian = $form->getData()['veterinarian'];
            $veterinarian->setAddress($address);
            $veterinarian->setUser($user);
            $this->entityManager->persist($address);
            $this->entityManager->persist($veterinarian);
            $this->entityManager->flush();
            $this->addFlash('vetCreated', sprintf('Veterinário %s cadastrado!', $veterinarian->getName()));

            return $this->redirectToRoute('app_vets');
        }

        return $this->render('veterinarian/create.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/veterinarians/{id}/edit', name: 'app_vets_edit')]
    public function edit(Request $request, $id): Response
    {
        $veterinarian = $this->veterinarianRepository->findOneBy(['id' => $id, 'user' => $this->getUser()]);
        if (!$veterinarian) {
            throw new AccessDeniedHttpException('Você não tem acesso a essa página');
        }
        $address = $this->veterinarianRepository->getAddressByVeterinarian($veterinarian);
        $form = $this->createFormBuilder()
            ->add('veterinarian', VeterinarianType::class, ['data' => $veterinarian])
            ->add('address', AddressType::class, ['data' => $address])
            ->getForm();
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $address = $form->getData()['address'];
            $requestData = $request->request->all();
            $city = $this->cityRepository->find((int) $requestData['city']);
            $address->setCity($city);
            $veterinarian = $form->getData()['veterinarian'];
            $veterinarian->setAddress($address);
            $veterinarian->setUpdatedAt(new \DateTime());
            $this->entityManager->persist($address);
            $this->entityManager->persist($veterinarian);
            $this->entityManager->flush();
            $this->addFlash('vetUpdated', sprintf('Veterinário %s atualizado!', $veterinarian->getName()));

            return $this->redirectToRoute('app_vets');
        }

        return $this->render('veterinarian/edit.html.twig', [
            'form' => $form->createView(),
            'veterinarian' => $veterinarian,
            'address' => $address,
        ]);
    }

    #[Route('/veterinarians/{id}/show', name: 'app_vets_show')]
    public function show(Veterinarian $veterinarian): Response
    {
        $user = $this->getUser();
        $veterinarian = $this->veterinarianRepository->getVeterinarianInfo($veterinarian, $user);

        return $this->render('veterinarian/show.html.twig', [
            'veterinarian' => $veterinarian,
        ]);
    }

    #[Route('/veterinarians/{id}/delete', name: 'app_vets_delete')]
    public function detele($id): Response
    {
        $veterinarian = $this->veterinarianRepository->findOneBy(['id' => $id, 'user' => $this->getUser()]);
        if (!$veterinarian) {
            throw new AccessDeniedHttpException('Você não tem acesso a essa página!');
        }
        $veterinarian->setDeletedAt(new \DateTime());
        $this->entityManager->persist($veterinarian);
        $this->entityManager->flush();
        $this->addFlash('vetDeleted', sprintf('Veterinário %s removido!', $veterinarian->getName()));

        return $this->redirectToRoute('app_vets');
    }
}
