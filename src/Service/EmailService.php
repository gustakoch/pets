<?php

namespace App\Service;

use App\Entity\User;
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

    public function sendActivationEmail(User $user, string $activationLink): void
    {
        $htmlContent = $this->twig->render('emails/activate-account.html.twig', [
            'activationLink' => $activationLink,
            'user' => $user,
        ]);
        $email = (new TemplatedEmail())
            ->from($this->emailSenderUser)
            ->to($user->getEmail())
            ->subject('PetsControl - Ative sua conta')
            ->html($htmlContent);
        $this->mailer->send($email);
    }

    public function sendPasswordResetEmail(User $user, string $resetLink): void
    {
        $htmlContent = $this->twig->render('emails/reset-password.html.twig', [
            'resetLink' => $resetLink,
            'user' => $user,
        ]);
        $email = (new TemplatedEmail())
            ->from($this->emailSenderUser)
            ->to($user->getEmail())
            ->subject('PetsControl - Redefinição de senha')
            ->html($htmlContent);
        $this->mailer->send($email);
    }

    public function sendPasswordResetConfirmationEmail(User $user): void
    {
        $htmlContent = $this->twig->render('emails/reset-password-confirmation.html.twig', [
            'user' => $user,
        ]);
        $email = (new TemplatedEmail())
            ->from($this->emailSenderUser)
            ->to($user->getEmail())
            ->subject('PetsControl - Senha redefinida com sucesso')
            ->html($htmlContent);
        $this->mailer->send($email);
    }
}
