<?php

namespace App\Trait;

use Doctrine\ORM\Query;
use Pagerfanta\Doctrine\ORM\QueryAdapter;
use Pagerfanta\Pagerfanta;

trait Pagination
{
    public const DEFAULT_MAX_PER_PAGE = 10;

    public function pagerFantaPagination(Query $dataQuery, int $currentPage): Pagerfanta
    {
        $adapter = new QueryAdapter($dataQuery);
        $pagerFanta = new Pagerfanta($adapter);
        $pagerFanta->setMaxPerPage(self::DEFAULT_MAX_PER_PAGE);
        $pagerFanta->setCurrentPage($currentPage);

        return $pagerFanta;
    }
}
