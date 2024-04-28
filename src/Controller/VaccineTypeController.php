<?php

namespace App\Controller;

use App\Entity\VaccineType;
use App\Form\VaccineTypeType;
use App\Repository\VaccineTypeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\Routing\Attribute\Route;

class VaccineTypeController extends AbstractController
{
    public const ROUTE_VACCINES_TYPES = 'app_vaccines_types';

    public function __construct(
        private VaccineTypeRepository $vaccineTypeRepository,
        private EntityManagerInterface $entityManager,
    ) {
    }

    #[Route('/vaccines/types', name: self::ROUTE_VACCINES_TYPES)]
    public function index()
    {
        $user = $this->getUser();
        $types = [];
        if (in_array('ROLE_ADMIN', $user->getRoles())) {
            $types = $this->vaccineTypeRepository->findAll();
        } else {
            $types = $this->vaccineTypeRepository->getVaccineTypes($user);
        }

        return $this->render('vaccine/type/index.html.twig', [
            'types' => $types,
        ]);
    }

    #[Route('/vaccines/types/create', name: 'app_vaccines_types_create')]
    public function create(Request $request)
    {
        $vaccineType = new VaccineType();
        $form = $this->createForm(VaccineTypeType::class, $vaccineType);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $vaccineType->setName($form->get('name')->getData());
            $vaccineType->setDescription($form->get('description')->getData());
            $vaccineType->setUser($this->getUser());
            $this->entityManager->persist($vaccineType);
            $this->entityManager->flush();
            $this->addFlash('vaccineTypeCreated', sprintf('Tipo de vacina `%s` criado!', $vaccineType->getName()));

            return $this->redirectToRoute('app_vaccines_create');
        }

        return $this->render('vaccine/type/create.html.twig', [
            'form' => $form,
        ]);
    }

    #[Route('/vaccines/types/{id}/delete', name: 'app_vaccines_types_delete')]
    public function delete($id)
    {
        $user = $this->getUser();
        $type = $this->vaccineTypeRepository->getVaccineType($user, $id);
        if (!$type instanceof VaccineType) {
            throw new AccessDeniedHttpException('Você não tem acesso a essa página');
        }
        $type->setDeletedAt(new \DateTime());
        $this->entityManager->persist($type);
        $this->entityManager->flush();

        return $this->redirectToRoute(self::ROUTE_VACCINES_TYPES);
    }
}
