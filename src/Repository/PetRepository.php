<?php

namespace App\Repository;

use App\Entity\Pet;
use App\Entity\Specie;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Doctrine\Persistence\ManagerRegistry;

class PetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Pet::class);
    }

    public function countPets(User $user): int
    {
        return $this->createQueryBuilder('p')
            ->select('COUNT(p)')
            ->andWhere('p.user = :user')
            ->andWhere('p.deletedAt IS NULL')
            ->setParameter('user', $user)
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function getPetsQuery(User $user, ?string $name = null, ?Specie $specie = null): Query
    {
        $qb = $this->createQueryBuilder('p')
            ->addSelect('s', 'v')
            ->join('p.specie', 's')
            ->join('p.user', 'user')
            ->leftJoin('p.veterinarians', 'v')
            ->andWhere('user = :user')
            ->andWhere('p.deletedAt IS NULL')
            ->setParameter('user', $user)
            ->orderBy('p.name', 'ASC');
        if ($name) {
            $qb->andWhere('p.name LIKE :name')
                ->setParameter('name', '%'.$name.'%');
        }
        if ($specie) {
            $qb->andWhere('s = :specie')
                ->setParameter('specie', $specie);
        }

        return $qb->getQuery();
    }

    public function getPet(User $user, int $id): ?Pet
    {
        return $this->createQueryBuilder('p')
            ->addSelect('s', 'vet', 'vac')
            ->join('p.specie', 's')
            ->leftJoin('p.veterinarians', 'vet')
            ->leftJoin('p.vaccines', 'vac')
            ->andWhere('p.id = :id')
            ->andWhere('p.user = :user')
            ->andWhere('vac.deletedAt IS NULL')
            ->setParameter('id', $id)
            ->setParameter('user', $user)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
