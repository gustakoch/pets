<?php

namespace App\Service;

use App\Enum\LevelEnum;
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;

class ViaCepService
{
    public function __construct(
        private ContainerBagInterface $containerBag,
        private readonly LoggerService $loggerService,
    ) {
        $this->loggerService->setLoggerChannel('viacepservice');
    }

    public function getZipCodeInfo(?string $zipcode = null): array
    {
        try {
            $curl = curl_init();
            curl_setopt_array($curl, [
                CURLOPT_URL => $this->containerBag->get('via_cep_url').$zipcode.'/json',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_CUSTOMREQUEST => 'GET',
                CURLOPT_TIMEOUT => 360000,
                CURLOPT_POSTFIELDS => json_encode([]),
            ]);
            $error = curl_error($curl);
            if ($error) {
                throw new \Exception(sprintf('Erro interno ao tentar buscar dados do CEP %s', $zipcode));
            }
            $data = curl_exec($curl);
            $data = (array) json_decode($data);
            if (isset($data['erro'])) {
                throw new \Exception(sprintf('Não foi possível localizar os dados do CEP %s', $zipcode));
            }

            return JsonService::response(false, '', $data);
        } catch (\Exception $e) {
            $this->loggerService->setLog(LevelEnum::Info, $e->getMessage(), ['zipcode' => $zipcode]);

            return JsonService::response(true, $e->getMessage(), []);
        }
    }
}
