<?php

namespace App\Command;

use App\Entity\EmailVaccine;
use App\Entity\User;
use App\Manager\VaccineManager;
use App\Repository\EmailVaccineRepository;
use App\Service\EmailService;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

#[AsCommand(name: 'app:vaccines-emails-expired', description: 'Sends emails to users whose vaccines have already expired')]
class VaccinesEmailsExpiredCommand extends Command
{
    public function __construct(
        private readonly EmailService $emailService,
        private readonly VaccineManager $vaccineManager,
        private readonly EmailVaccineRepository $emailVaccineRepository,
        private readonly UrlGeneratorInterface $urlGeneratorInterface,
        private readonly ContainerBagInterface $containerBag,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $groupedVaccines = $this->vaccineManager->getVaccinesReinforcementExpired();
        $countEmailsSent = 0;
        if ('dev' === $this->containerBag->get('app_env')) {
            $loginUrl = $this->urlGeneratorInterface->generate('app_login', [], UrlGeneratorInterface::ABSOLUTE_URL);
        } else {
            $loginUrl = 'https://pets.gustakoch.com.br/login';
        }
        foreach ($groupedVaccines as $groupVaccine) {
            $user = $groupVaccine['user'];
            $vaccines = $groupVaccine['vaccines'];
            $vaccinesToBeSent = [];
            foreach ($vaccines as $vaccine) {
                $emailVaccine = $this->emailVaccineRepository->findOneBy(['vaccine' => $vaccine, 'expired' => false]);
                if ($emailVaccine instanceof EmailVaccine) {
                    $vaccinesToBeSent[] = $vaccine;
                    $emailVaccine->setExpired(true)
                        ->setTimesSent($emailVaccine->getTimesSent() + 1)
                        ->setUpdatedAt(new \DateTime());
                    $this->emailVaccineRepository->save($emailVaccine);
                }
            }
            if (count($vaccinesToBeSent) > 0) {
                $this->sendEmailForUser($user, $vaccinesToBeSent, $loginUrl);
                ++$countEmailsSent;
            }
        }
        $io->success(sprintf('Processo finalizado com sucesso! %d e-mails enviados.', $countEmailsSent));

        return Command::SUCCESS;
    }

    private function sendEmailForUser(User $user, array $vaccines, string $loginUrl): void
    {
        $this->emailService->sendTemplatedEmail(
            'emails/vaccines-expired.html.twig',
            $user->getEmail(),
            'PetsControl - Reforço de vacinas vencido',
            [
                'user' => $user,
                'vaccines' => $vaccines,
                'loginUrl' => $loginUrl,
            ]
        );
    }
}
