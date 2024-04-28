<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\VaccineType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class VaccineTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VaccineType::class);
    }

    public function getVaccineTypes(User $user): array
    {
        return $this->createQueryBuilder('vt')
            ->andWhere('vt.user = :user')
            ->andWhere('vt.deletedAt IS NULL')
            ->setParameter('user', $user)
            ->getQuery()
            ->getResult();
    }

    public function getVaccineType(User $user, int $id): ?VaccineType
    {
        return $this->createQueryBuilder('vt')
            ->andWhere('vt.id = :id')
            ->andWhere('vt.user = :user')
            ->andWhere('vt.deletedAt IS NULL')
            ->setParameter('id', $id)
            ->setParameter('user', $user)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
