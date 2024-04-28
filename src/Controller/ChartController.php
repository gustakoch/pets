<?php

namespace App\Controller;

use App\Repository\VaccineRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER')]
#[Route('/charts')]
class ChartController extends AbstractController
{
    #[Route('/vaccines', name: 'app_charts_vaccines')]
    public function chartVaccines(VaccineRepository $vaccineRepository): JsonResponse
    {
        $user = $this->getUser();
        $vaccines = $vaccineRepository->getVaccinesQuery($user)->getResult();

        return $this->json([
            'vaccines' => $vaccines,
        ]);
    }
}
