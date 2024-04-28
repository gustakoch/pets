<?php

namespace App\Command;

use App\Entity\City;
use App\Repository\StateRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(name: 'app:import:cities', description: 'Imports data from cities with their states into the database.')]
class ImportCitiesCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private StateRepository $stateRepository,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->addArgument('file', InputArgument::OPTIONAL, 'Path to the JSON file.', 'cities.json');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $filePath = $input->getArgument('file');
        if (!file_exists(__DIR__.'/../../public/'.$filePath)) {
            $io->error('File `cities.json` not found! :( Please, check the path');

            return Command::FAILURE;
        }
        $jsonData = file_get_contents(__DIR__.'/../../public/'.$filePath);
        $citiesPerState = json_decode($jsonData, true);
        foreach ($citiesPerState as $cityPerState) {
            $state = $this->stateRepository->findOneBy(['acronym' => $cityPerState['sigla']]);
            if (!$state) {
                $io->error(sprintf('State `%s` not found!', $cityPerState['sigla']));

                return Command::FAILURE;
            }
            foreach ($cityPerState['cidades'] as $cityName) {
                $cityObject = new City();
                $cityObject->setName($cityName);
                $cityObject->setState($state);
                $this->entityManager->persist($cityObject);
            }
        }
        $this->entityManager->flush();
        $io->success('Cities data imported successfully! :)');

        return Command::SUCCESS;
    }
}
