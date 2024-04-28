<?php

namespace App\Command;

use App\Entity\State;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(name: 'app:import:states', description: 'Import the states of Brazil to the database')]
class ImportStatesCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $entityManager,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->addArgument('file', InputArgument::OPTIONAL, 'Path to the JSON file.', 'states.json');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $filePath = $input->getArgument('file');
        if (!file_exists(__DIR__.'/../../public/'.$filePath)) {
            $io->error('File `states.json` not found! :( Please, check the path');

            return Command::FAILURE;
        }
        $jsonData = file_get_contents(__DIR__.'/../../public/'.$filePath);
        $states = json_decode($jsonData, true);
        foreach ($states as $state) {
            $stateObject = new State();
            $stateObject->setName($state['name']);
            $stateObject->setAcronym($state['acronym']);
            $this->entityManager->persist($stateObject);
        }
        $this->entityManager->flush();
        $io->success('States data imported successfully! :)');

        return Command::SUCCESS;
    }
}
