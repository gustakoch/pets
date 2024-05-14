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
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

#[AsCommand(name: 'app:vaccines-emails-7-days', description: 'Sends emails to users with vaccines expiring within the next 7 days')]
class VaccinesEmails7DaysCommand extends Command
{
    public function __construct(
        private readonly EmailService $emailService,
        private readonly VaccineManager $vaccineManager,
        private readonly EmailVaccineRepository $emailVaccineRepository,
        private readonly UrlGeneratorInterface $urlGeneratorInterface,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $groupedVaccinesByUser = $this->vaccineManager->getVaccinesNext7DaysGroupedByUser();
        $loginUrl = $this->urlGeneratorInterface->generate('app_login', [], UrlGeneratorInterface::ABSOLUTE_URL);
        $countEmailsSent = 0;
        foreach ($groupedVaccinesByUser as $groupVaccine) {
            $user = $groupVaccine['user'];
            $vaccines = $groupVaccine['vaccines'];
            $vaccinesToBeSent = [];
            foreach ($vaccines as $vaccine) {
                if (!$this->emailVaccineRepository->findOneBy(['vaccine' => $vaccine])) {
                    $vaccinesToBeSent[] = $vaccine;
                    $emailVaccine = new EmailVaccine();
                    $emailVaccine->setVaccine($vaccine)
                        ->setTimesSent(1)
                        ->setExpired(false);
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
            'emails/vaccines-next-7-days.html.twig',
            $user->getEmail(),
            'PetsControl - Reforço de vacina próximo',
            [
                'user' => $user,
                'vaccines' => $vaccines,
                'loginUrl' => $loginUrl,
            ]
        );
    }
}
