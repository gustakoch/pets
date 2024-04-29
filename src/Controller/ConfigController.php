<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ConfigController extends AbstractController
{
    #[Route('/admin/config', name: 'app_config')]
    public function index(): Response
    {
        return $this->render('config/index.html.twig');
    }
}
