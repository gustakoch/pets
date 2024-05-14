<?php

namespace App\Service;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\Mailer\MailerInterface;
use Twig\Environment;

class EmailService
{
    public function __construct(
        private string $emailSenderUser,
        private MailerInterface $mailer,
        private ParameterBagInterface $parameterBag,
        private Environment $twig,
    ) {
    }

    public function sendTemplatedEmail(string $templatedEmail, string $toEmail, string $subject, array $data = []): void
    {
        $htmlContent = $this->twig->render($templatedEmail, $data);
        $email = (new TemplatedEmail())
            ->from($this->emailSenderUser)
            ->to($toEmail)
            ->subject($subject)
            ->html($htmlContent);
        $this->mailer->send($email);
    }
}
