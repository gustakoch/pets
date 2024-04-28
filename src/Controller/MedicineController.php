<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MedicineController extends AbstractController
{
    #[Route('/medicines', name: 'app_medicines')]
    public function index(): Response
    {
        return $this->render('medicine/index.html.twig');
    }
}
