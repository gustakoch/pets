<?php

namespace App\Command;

use App\Entity\VaccineType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(name: 'app:import:vaccine-types', description: 'Import the types os vaccines inside the database')]
class ImportVaccineTypesCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private UserRepository $userRepository,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->addArgument('file', InputArgument::OPTIONAL, 'Path to the JSON file.', 'vaccines-types.json');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $filePath = $input->getArgument('file');
        if (!file_exists(__DIR__.'/../../public/'.$filePath)) {
            $io->error('File `vaccines-types.json` not found! :( Please, check the path');

            return Command::FAILURE;
        }
        $jsonData = file_get_contents(__DIR__.'/../../public/'.$filePath);
        $vaccinesTypes = json_decode($jsonData, true);
        $user = $this->userRepository->find(1);
        foreach ($vaccinesTypes as $type) {
            $vaccineType = new VaccineType();
            $vaccineType->setName($type['name'])
                ->setDescription($type['description'])
                ->setUser($user);
            $this->entityManager->persist($vaccineType);
        }
        $this->entityManager->flush();
        $io->success('Vaccine types data imported successfully! :)');

        return Command::SUCCESS;
    }
}
