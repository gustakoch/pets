<?php

namespace App\Repository;

use App\Entity\Address;
use App\Entity\Pet;
use App\Entity\User;
use App\Entity\Veterinarian;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Doctrine\Persistence\ManagerRegistry;

class VeterinarianRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Veterinarian::class);
    }

    public function countVeterinarians(User $user): int
    {
        return $this->createQueryBuilder('v')
            ->select('COUNT(v)')
            ->andWhere('v.user = :user')
            ->andWhere('v.deletedAt IS NULL')
            ->setParameter('user', $user)
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function getVetsByUserQuery(User $user, ?string $veterinarianName = null): Query
    {
        return $this->createQueryBuilder('v')
            ->join('v.user', 'u')
            ->andWhere('u = :user')
            ->andWhere('v.name LIKE :veterinarianName')
            ->andWhere('v.deletedAt IS NULL')
            ->setParameter('veterinarianName', "%$veterinarianName%")
            ->setParameter('user', $user)
            ->getQuery();
    }

    public function getVeterinariansByPet(Pet $pet): array
    {
        return $this->createQueryBuilder('v')
            ->addSelect('a', 's', 'c')
            ->leftJoin('v.pets', 'p')
            ->join('v.address', 'a')
            ->join('a.state', 's')
            ->join('a.city', 'c')
            ->andWhere('p = :pet')
            ->setParameter('pet', $pet)
            ->getQuery()
            ->getResult();
    }

    public function getAddressByVeterinarian(Veterinarian $veterinarian): ?Address
    {
        $data = $this->createQueryBuilder('v')
            ->addSelect('a', 'c', 's')
            ->join('v.address', 'a')
            ->join('a.city', 'c')
            ->join('c.state', 's')
            ->andWhere('v = :veterinarian')
            ->setParameter('veterinarian', $veterinarian)
            ->getQuery()
            ->getOneOrNullResult();

        return $data->getAddress();
    }

    public function getVeterinarianInfo(Veterinarian $veterinarian, User $user): ?Veterinarian
    {
        return $this->createQueryBuilder('v')
            ->addSelect('a', 's', 'c', 'p')
            ->leftJoin('v.pets', 'p')
            ->join('v.address', 'a')
            ->join('a.state', 's')
            ->join('a.city', 'c')
            ->andWhere('v = :veterinarian')
            ->andWhere('v.user = :user')
            ->setParameter('veterinarian', $veterinarian)
            ->setParameter('user', $user)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
