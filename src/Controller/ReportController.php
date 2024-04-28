<?php

namespace App\Controller;

use App\Entity\Vaccine;
use App\Form\VaccineType;
use App\Repository\VaccineRepository;
use App\Service\VaccineExportService;
use Pagerfanta\Doctrine\ORM\QueryAdapter;
use Pagerfanta\Pagerfanta;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER')]
#[Route('/reports/vaccines')]
class ReportController extends AbstractController
{
    public const MAX_PER_PAGE = 10;

    public function __construct(
        private VaccineRepository $vaccineRepository,
    ) {
    }

    #[Route('', name: 'app_report_vaccines')]
    public function vaccineReport(Request $request): Response
    {
        $user = $this->getUser();
        $vaccine = new Vaccine();
        $form = $this->createForm(VaccineType::class, $vaccine);
        $form->handleRequest($request);
        $vaccinesQuery = $this->vaccineRepository->getVaccinesQuery($user);
        if ($form->isSubmitted()) {
            $filters = $request->request->all()['vaccine'];
            $vaccinesQuery = $this->vaccineRepository->getVaccinesByFilters($user, $filters);
        }
        $adapter = new QueryAdapter($vaccinesQuery);
        $pagerFanta = new Pagerfanta($adapter);
        $pagerFanta->setMaxPerPage(self::MAX_PER_PAGE);
        $pagerFanta->setCurrentPage($request->query->getInt('page', 1));

        return $this->render('report/vaccine-report.html.twig', [
            'form' => $form,
            'pager' => $pagerFanta,
        ]);
    }

    #[Route('/export', name: 'app_report_vaccines_export')]
    public function vaccineReportExport(Request $request, VaccineExportService $vaccineExportService): Response
    {
        $user = $this->getUser();
        $filters = $request->request->all();
        $vaccinesData = $this->vaccineRepository
            ->getVaccinesByFilters($user, $filters['vaccine'])
            ->getResult();
        $content = $vaccineExportService->exportCsv($vaccinesData);
        $response = new Response($content);
        $response->headers->set('Content-Type', 'text/csv');
        $response->headers->set('Content-Disposition', 'attachment; filename="vaccines_report_'.time().'.csv"');

        return $response;
    }
}
