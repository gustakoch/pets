<?php

namespace App\Manager;

use App\Repository\VaccineRepository;

class VaccineManager
{
    public function __construct(private readonly VaccineRepository $vaccineRepository)
    {
    }

    public function getVaccinesNext7DaysGroupedByUser(): array
    {
        $actualDate = (new \DateTime())->setTime(0, 0, 0);
        $actualDatePlus7 = clone $actualDate;
        $actualDatePlus7 = $actualDatePlus7->modify('+7 days')->setTime(23, 59, 59);
        $vaccines = $this->vaccineRepository->getVaccinesNext7Days($actualDate, $actualDatePlus7);
        if (!$vaccines) {
            return [];
        }

        return $this->groupVaccinationsByUser($vaccines);
    }

    public function getVaccinesReinforcementExpired(): array
    {
        $vaccines = $this->vaccineRepository->getVaccinesReinforcementExpired();
        if (!$vaccines) {
            return [];
        }

        return $this->groupVaccinationsByUser($vaccines);
    }

    private function groupVaccinationsByUser(array $vaccines): array
    {
        $groupedVaccines = [];
        foreach ($vaccines as $vaccine) {
            $user = $vaccine->getUser();
            if (!isset($groupedVaccines[$user->getId()])) {
                $groupedVaccines[$user->getId()] = [
                    'user' => $user,
                    'vaccines' => [],
                ];
            }
            $groupedVaccines[$user->getId()]['vaccines'][] = $vaccine;
        }
        $groupedVaccines = array_filter($groupedVaccines, function ($group) {
            return count($group['vaccines']) > 0;
        });

        return array_values($groupedVaccines);
    }
}
