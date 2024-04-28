<?php

namespace App\DataFixtures;

use App\Entity\Pet;
use App\Entity\User;
use App\Entity\Vaccine;
use App\Repository\VaccineTypeRepository;
use App\Repository\VeterinarianRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class VaccineFixtures extends Fixture
{
    public function __construct(
        private VeterinarianRepository $veterinarianRepository,
        private VaccineTypeRepository $vaccineTypeRepository,
        private UserPasswordHasherInterface $hasher,
    ) {
    }

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('pt_BR');
        $veterinarian = $this->veterinarianRepository->find(7);
        $vaccineType = $this->vaccineTypeRepository->find(1);

        $user = new User();
        $user->setUsername($faker->name());
        $user->setEmail($faker->email());
        $password = $this->hasher->hashPassword($user, 'Lauren@12');
        $user->setPassword($password);
        $user->setRoles($user->getRoles());
        $pet = new Pet();
        $pet
            ->setName($faker->name())
            ->setBreed($faker->name())
            ->setColor($faker->name())
            ->setDateOfBirth($faker->dateTimeBetween('-10 years', 'now'));

        $manager->persist($user);
        $manager->persist($pet);
        $manager->flush();

        for ($i = 1; $i <= 1; ++$i) {
            $vaccine = new Vaccine();
            $vaccine
                ->setName($faker->company())
                ->setDescription($faker->paragraph())
                ->setReinforcementAt($faker->dateTimeBetween('now', '+1 year'))
                ->setPrice($faker->randomFloat(2, 10, 1000))
                ->setManufacturer($faker->company())
                ->setApplicationDate($faker->dateTimeBetween('-1 year', 'now'))
                ->setUser($user)
                ->setVeterinarian($veterinarian)
                ->setPet($pet)
                ->setType($vaccineType);

            $manager->persist($vaccine);
        }
        $manager->flush();
    }
}
