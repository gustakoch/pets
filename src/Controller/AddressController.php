<?php

namespace App\Controller;

use App\Manager\AddressManager;
use App\Repository\AddressRepository;
use App\Repository\CityRepository;
use App\Repository\StateRepository;
use App\Service\ViaCepService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER')]
class AddressController extends AbstractController
{
    public function __construct(
        private CityRepository $cityRepository,
        private StateRepository $stateRepository,
        private AddressRepository $addressRepository,
        private ViaCepService $viaCepService,
        private AddressManager $addressManager,
    ) {
    }

    #[Route('/address/cities/{stateId}', name: 'app_address_cities_per_state')]
    public function getCities($stateId = null): JsonResponse
    {
        $response = $this->addressManager->getCitiesByStateId($stateId);

        return $this->json($response);
    }

    #[Route('/address/zipcode/{zipcode}', name: 'app_address_zipcode')]
    public function zipcode(?string $zipcode = null): JsonResponse
    {
        $response = $this->addressManager->getZipCodeInfo($zipcode);

        return $this->json($response);
    }
}
