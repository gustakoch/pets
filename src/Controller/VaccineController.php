<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Vaccine;
use App\Form\VaccineType;
use App\Manager\VaccineManager;
use App\Repository\VaccineRepository;
use App\Service\CacheService;
use App\Trait\Pagination;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER')]
#[Route('/vaccines')]
class VaccineController extends AbstractController
{
    use Pagination;

    public const ROUTE_APP_VACCINES = 'app_vaccines';
    public const CACHED_VACCINES_QUERY = 'cached_vaccines_query_';

    public function __construct(
        private VaccineRepository $vaccineRepository,
        private EntityManagerInterface $entityManager,
        private VaccineManager $vaccineManager,
        private CacheService $cacheService,
    ) {
    }

    #[Route('', name: self::ROUTE_APP_VACCINES)]
    public function index(Request $request): Response
    {
        /** @var User $user */
        $user = $this->getUser();
        $vaccine = new Vaccine();
        $form = $this->createForm(VaccineType::class, $vaccine);
        $form->handleRequest($request);
        $vaccinesQuery = $this->cacheService->handle(self::CACHED_VACCINES_QUERY.$user->getId(), 'App\Entity\Vaccine', $user);
        if ($form->isSubmitted()) {
            $name = $form->get('name')->getData();
            $type = $form->get('type')->getData();
            $vaccinesQuery = $this->vaccineRepository->getVaccinesQuery($user, $name, $type);
        }
        $pagerFanta = $this->pagerFantaPagination($vaccinesQuery, $request->query->getInt('page', 1));

        return $this->render('vaccine/index.html.twig', [
            'form' => $form,
            'pager' => $pagerFanta,
        ]);
    }

    #[Route('/create', name: 'app_vaccines_create')]
    public function create(Request $request): Response
    {
        $vaccine = new Vaccine();
        $form = $this->createForm(VaccineType::class, $vaccine);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            /** @var User $user */
            $user = $this->getUser();
            $vaccine = $form->getData();
            $vaccine->setUser($user);
            $this->entityManager->persist($vaccine);
            $this->entityManager->flush();
            $this->cacheService->clearCache(self::CACHED_VACCINES_QUERY.$user->getId());
            $this->addFlash('vaccineCreated', sprintf('Vacina %s cadastrada!', $vaccine->getName()));

            return $this->redirectToRoute(self::ROUTE_APP_VACCINES);
        }

        return $this->render('vaccine/create.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}/show', name: 'app_vaccines_show')]
    public function show($id): Response
    {
        $user = $this->getUser();
        $vaccine = $this->vaccineRepository->getVaccineInfo($id, $user);
        if (!$vaccine) {
            throw new AccessDeniedHttpException('Você não tem acesso a essa página');
        }

        return $this->render('vaccine/show.html.twig', [
            'vaccine' => $vaccine,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_vaccines_edit')]
    public function edit(Request $request, $id): Response
    {
        /** @var User $user */
        $user = $this->getUser();
        $vaccine = $this->vaccineRepository->getVaccineInfo($id, $user);
        if (!$vaccine) {
            throw new AccessDeniedHttpException('Você não tem acesso a essa página');
        }
        $form = $this->createForm(VaccineType::class, $vaccine);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $vaccine = $form->getData();
            $vaccine->setUpdatedAt(new \DateTime());
            $this->entityManager->persist($vaccine);
            $this->entityManager->flush();
            $this->cacheService->clearCache(self::CACHED_VACCINES_QUERY.$user->getId());
            $this->addFlash('vaccineUpdated', sprintf('Vacina %s atualizada!', $vaccine->getName()));

            return $this->redirectToRoute(self::ROUTE_APP_VACCINES);
        }

        return $this->render('vaccine/edit.html.twig', [
            'form' => $form->createView(),
            'vaccine' => $vaccine,
        ]);
    }

    #[Route('/{id}/delete', name: 'app_vaccines_delete')]
    public function delete($id): Response
    {
        $vaccine = $this->vaccineRepository->findOneBy(['id' => $id, 'user' => $this->getUser()]);
        if (!$vaccine) {
            throw new AccessDeniedHttpException('Você não tem acesso a essa página');
        }
        /** @var User $user */
        $user = $this->getUser();
        $vaccine->setDeletedAt(new \DateTime());
        $this->entityManager->persist($vaccine);
        $this->entityManager->flush();
        $this->cacheService->clearCache(self::CACHED_VACCINES_QUERY.$user->getId());
        $this->addFlash('vaccineDeleted', sprintf('Vacina %s removida!', $vaccine->getName()));

        return $this->redirectToRoute(self::ROUTE_APP_VACCINES);
    }
}
