<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\Vaccine;
use App\Entity\VaccineType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Doctrine\Persistence\ManagerRegistry;

class VaccineRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Vaccine::class);
    }

    public function countVaccines(User $user): int
    {
        return $this->createQueryBuilder('v')
            ->select('COUNT(v)')
            ->andWhere('v.user = :user')
            ->andWhere('v.deletedAt IS NULL')
            ->setParameter('user', $user)
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function getVaccineInfo($id, User $user): ?Vaccine
    {
        return $this->createQueryBuilder('v')
            ->addSelect('u', 't', 'p', 'vet')
            ->join('v.user', 'u')
            ->join('v.type', 't')
            ->leftJoin('v.pet', 'p')
            ->leftJoin('v.veterinarian', 'vet')
            ->andWhere('v.id = :id')
            ->andWhere('u = :user')
            ->andWhere('v.deletedAt IS NULL')
            ->setParameter('id', $id)
            ->setParameter('user', $user)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function getVaccinesQuery(User $user, ?string $name = null, ?VaccineType $type = null): Query
    {
        $qb = $this->createQueryBuilder('v')
            ->join('v.user', 'u')
            ->join('v.type', 't')
            ->leftJoin('v.pet', 'p')
            ->andWhere('u = :user')
            ->andWhere('v.deletedAt IS NULL')
            ->setParameter('user', $user)
            ->orderBy('v.name', 'ASC');
        if ($name) {
            $qb->andWhere('v.name LIKE :name')
                ->setParameter('name', "%$name%");
        }
        if ($type) {
            $qb->andWhere('t = :type')
                ->setParameter('type', $type);
        }

        return $qb->getQuery();
    }

    public function getVaccinesByFilters(User $user, array $filters = [])
    {
        $qb = $this->createQueryBuilder('v')
            ->addSelect('p', 'vet', 't')
            ->join('v.pet', 'p')
            ->join('v.veterinarian', 'vet')
            ->join('v.type', 't')
            ->andWhere('v.user = :user')
            ->andWhere('v.deletedAt IS NULL')
            ->setParameter('user', $user)
            ->orderBy('v.name', 'ASC');
        if ($filters['name']) {
            $qb->andWhere('v.name LIKE :name');
            $qb->setParameter('name', '%'.$filters['name'].'%');
        }
        if ($filters['type']) {
            $qb->andWhere('t.id = :type');
            $qb->setParameter('type', $filters['type']);
        }
        if ($filters['applicationDateInitial'] && $filters['applicationDateEnd']) {
            $applicationDateInitial = new \DateTime($filters['applicationDateInitial']);
            $applicationDateEnd = new \DateTime($filters['applicationDateEnd']);
            $qb->andWhere('v.applicationDate BETWEEN :startApplicationDate AND :endApplicationDate')
                ->setParameter('startApplicationDate', $applicationDateInitial->format('Y-m-d'))
                ->setParameter('endApplicationDate', $applicationDateEnd->format('Y-m-d'));
        }
        if ($filters['reinforcementDateInitial'] && $filters['reinforcementDateEnd']) {
            $reinforcementDateInitial = new \DateTime($filters['reinforcementDateInitial']);
            $reinforcementDateEnd = new \DateTime($filters['reinforcementDateEnd']);
            $qb->andWhere('v.reinforcementAt BETWEEN :startReinforcementDate AND :endReinforcementDate')
                ->setParameter('startReinforcementDate', $reinforcementDateInitial->format('Y-m-d'))
                ->setParameter('endReinforcementDate', $reinforcementDateEnd->format('Y-m-d'));
        }

        return $qb->getQuery();
    }

    public function getVaccinesNext7Days($actualDate, $actualDatePlus7): array
    {
        return $this->createQueryBuilder('v')
            ->addSelect('p', 'vet', 'u')
            ->join('v.pet', 'p')
            ->join('v.veterinarian', 'vet')
            ->join('v.user', 'u')
            ->andWhere('v.reinforcementAt BETWEEN :actualDate AND :actualDatePlus7')
            ->setParameter('actualDate', $actualDate)
            ->setParameter('actualDatePlus7', $actualDatePlus7)
            ->getQuery()
            ->getResult();
    }

    public function getVaccinesReinforcementExpired(): array
    {
        $yesterday = new \DateTime();
        $yesterday->modify('-1 day');

        return $this->createQueryBuilder('v')
            ->addSelect('p', 'vet', 'u')
            ->join('v.pet', 'p')
            ->join('v.veterinarian', 'vet')
            ->join('v.user', 'u')
            ->andWhere('v.reinforcementAt < :yesterday')
            ->setParameter('yesterday', $yesterday)
            ->getQuery()
            ->getResult();
    }
}
