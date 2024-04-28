<?php

namespace App\Repository;

use App\Entity\City;
use App\Entity\State;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class CityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, City::class);
    }

    public function getCitiesByState(State $state): array
    {
        return $this->createQueryBuilder('c')
            ->select('c.id', 'c.name')
            ->andWhere('c.state = :state')
            ->setParameter('state', $state)
            ->getQuery()
            ->getResult();
    }

    public function getCityByName(string $cityName, State $state): ?City
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.state = :state')
            ->andWhere('c.name = :name')
            ->setParameter('name', $cityName)
            ->setParameter('state', $state)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
