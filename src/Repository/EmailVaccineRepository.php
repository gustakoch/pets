<?php

namespace App\Repository;

use App\Entity\EmailVaccine;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;

class EmailVaccineRepository extends ServiceEntityRepository
{
    public function __construct(
        private readonly ManagerRegistry $registry,
        private readonly EntityManagerInterface $entityManager,
    ) {
        parent::__construct($registry, EmailVaccine::class);
    }

    public function save(EmailVaccine $emailVaccine): void
    {
        $this->entityManager->persist($emailVaccine);
        $this->entityManager->flush();
    }
}
