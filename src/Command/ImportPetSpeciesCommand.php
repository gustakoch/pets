<?php

namespace App\Command;

use App\Entity\Specie;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(name: 'app:import:species', description: 'Adds pet species to the database.')]
class ImportPetSpeciesCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $entityManager
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->setHelp('This command allows you to add pet species to the database.');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $petSpecies = $this->getPetSpecies();
        foreach ($petSpecies as $petSpecie) {
            $specie = new Specie();
            $specie->setName($petSpecie['specie']);
            $specie->setDescription($petSpecie['description']);
            $this->entityManager->persist($specie);
        }
        $this->entityManager->flush();
        $io->success('Pet species imported successfully! :)');

        return Command::SUCCESS;
    }

    private function getPetSpecies(): array
    {
        return [
            [
                'specie' => 'Cachorro',
                'description' => 'Animal de estimação leal e afetuoso conhecido por companheirismo e inteligência.',
            ],
            [
                'specie' => 'Gato',
                'description' => 'Felino independente e afetuoso, popular por sua natureza calma e habilidades de caça.',
            ],
            [
                'specie' => 'Pássaro',
                'description' => 'Animais de estimação coloridos e cantantes, que vão desde papagaios falantes até canários melodiosos.',
            ],
            [
                'specie' => 'Peixe',
                'description' => 'Animais aquáticos de baixa manutenção, ideais para aquários decorativos e relaxantes.',
            ],
            [
                'specie' => 'Coelho',
                'description' => 'Animal de estimação dócil e brincalhão, apreciado por sua natureza sociável e fofura.',
            ],
            [
                'specie' => 'Hamster',
                'description' => 'Roedor pequeno e adorável, fácil de cuidar, popular entre crianças e adultos.',
            ],
            [
                'specie' => 'Porquinho-da-índia',
                'description' => 'Roedor sociável e curioso, valorizado por sua personalidade gentil e vocalizações amigáveis.',
            ],
            [
                'specie' => 'Tartaruga',
                'description' => 'Réptil aquático ou semi-aquático, frequentemente mantido como animal de estimação por sua aparência e comportamento únicos.',
            ],
        ];
    }
}
