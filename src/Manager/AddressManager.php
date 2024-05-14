<?php

namespace App\Manager;

use App\Entity\City;
use App\Entity\State;
use App\Enum\LevelEnum;
use App\Repository\CityRepository;
use App\Repository\StateRepository;
use App\Service\JsonService;
use App\Service\LoggerService;
use App\Service\ViaCepService;

class AddressManager
{
    public function __construct(
        private StateRepository $stateRepository,
        private CityRepository $cityRepository,
        private ViaCepService $viaCepService,
        private readonly LoggerService $loggerService,
    ) {
        $this->loggerService->setLoggerChannel('address');
    }

    public function getCitiesByStateId($stateId = null): array
    {
        try {
            $state = $this->stateRepository->find($stateId);
            if (!$state) {
                throw new \Exception(sprintf('Estado %d não encontrado', $stateId));
            }
            $cities = $this->cityRepository->getCitiesByState($state);

            return JsonService::response(false, '', $cities);
        } catch (\Exception $e) {
            $this->loggerService->setLog(LevelEnum::Info, $e->getMessage(), ['state' => $state]);

            return JsonService::response(true, $e->getMessage(), []);
        }
    }

    public function getZipCodeInfo(?string $zipcode = null)
    {
        try {
            $responseViaCep = $this->viaCepService->getZipCodeInfo($zipcode);
            if ($responseViaCep['error']) {
                throw new \Exception($responseViaCep['message']);
            }
            if (!$responseViaCep['data']) {
                throw new \Exception(sprintf('O CEP %s informado não foi localizado', $zipcode));
            }
            $viaCepData = $responseViaCep['data'];
            $state = $this->stateRepository->findOneBy(['acronym' => $viaCepData['uf']]);
            if (!$state instanceof State) {
                throw new \Exception(sprintf('Estado %s não localizado', $viaCepData['uf']));
            }
            $city = $this->cityRepository->getCityByName($viaCepData['localidade'], $state);
            if (!$city instanceof City) {
                throw new \Exception(sprintf('Cidade %s não localizada', $viaCepData['localidade']));
            }
            $data = [
                'street' => $viaCepData['logradouro'],
                'complement' => $viaCepData['complemento'],
                'district' => $viaCepData['bairro'],
                'zipcode' => $zipcode,
                'state' => [
                    'id' => $state->getId(),
                    'name' => $state->getName(),
                ],
                'city' => [
                    'id' => $city->getId(),
                    'name' => $city->getName(),
                ],
            ];

            return JsonService::response(false, '', $data);
        } catch (\Exception $e) {
            $this->loggerService->setLog(LevelEnum::Info, $e->getMessage(), ['zipcode' => $zipcode]);

            return JsonService::response(true, $e->getMessage(), []);
        }
    }
}
