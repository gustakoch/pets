<?php

namespace App\Controller;

use App\Repository\PetRepository;
use App\Repository\VaccineRepository;
use App\Repository\VeterinarianRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER')]
#[Route('/admin/dashboard')]
class AdminController extends AbstractController
{
    public function __construct(
        private VaccineRepository $vaccineRepository,
        private PetRepository $petRepository,
        private VeterinarianRepository $veterinarianRepository,
    ) {
    }

    #[Route('', name: 'app_admin')]
    public function index(): Response
    {
        $user = $this->getUser();
        $countVaccines = $this->vaccineRepository->countVaccines($user);
        $countPets = $this->petRepository->countPets($user);
        $countVeterinarians = $this->veterinarianRepository->countVeterinarians($user);
        $params = compact('countVaccines', 'countPets', 'countVeterinarians');

        return $this->render('admin/index.html.twig', $params);
    }
}
