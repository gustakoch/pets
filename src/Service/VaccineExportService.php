<?php

namespace App\Service;

class VaccineExportService
{
    public function exportCsv(array $data = []): ?string
    {
        $tempFile = tmpfile();
        fputcsv($tempFile, [
            'Código',
            'Nome',
            'Tipo',
            'Pet que recebeu',
            'Vet que aplicou',
            'Data da aplicação',
            'Data do reforço',
            'Preço',
            'Fabricante',
        ]);
        foreach ($data as $vaccine) {
            fputcsv($tempFile, [
                $vaccine->getId(),
                $vaccine->getName(),
                $vaccine->getType()->getName(),
                $vaccine->getPet()->getName(),
                $vaccine->getVeterinarian()->getName(),
                $vaccine->getApplicationDate()->format('d/m/Y'),
                $vaccine->getReinforcementAt()->format('d/m/Y'),
                number_format($vaccine->getPrice(), 2, ',', '.'),
                $vaccine->getManufacturer(),
            ]);
        }
        rewind($tempFile);
        $content = stream_get_contents($tempFile);
        fclose($tempFile);

        return $content;
    }
}
