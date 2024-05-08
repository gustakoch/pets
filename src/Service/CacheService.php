<?php

namespace App\Service;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Query;
use Psr\Cache\CacheItemPoolInterface;

class CacheService
{
    public function __construct(
        private readonly CacheItemPoolInterface $cache,
        private readonly EntityManagerInterface $entityManager,
    ) {
    }

    public function handle(string $cacheKey, string $entityClass, User $user, array $parameters = []): Query
    {
        $cachedResult = $this->cache->getItem($cacheKey);
        if (!$cachedResult->isHit()) {
            $queryBuilder = $this->entityManager->createQueryBuilder();
            $queryBuilder
                ->select('e')
                ->from($entityClass, 'e')
                ->andWhere('e.deletedAt IS NULL')
                ->andWhere('e.user = :user');
            foreach ($parameters as $param => $value) {
                $queryBuilder
                    ->andWhere($queryBuilder->expr()->eq($param, ':'.$param))
                    ->setParameter($param, $value);
            }
            $queryBuilder->setParameter('user', $user);
            $query = $queryBuilder->getQuery();
            $cachedResult->set($query->getResult());
            $this->cache->save($cachedResult);

            return $query;
        }
        $result = $cachedResult->get();
        $queryBuilder = $this->entityManager->createQueryBuilder();
        $queryBuilder->select('e')
            ->from($entityClass, 'e')
            ->where('e.user = :user')
            ->andWhere($queryBuilder->expr()->in('e', ':result'))
            ->setParameter('user', $user)
            ->setParameter('result', $result);

        $query = $queryBuilder->getQuery();

        return $query;
    }

    public function clearCache(string $cacheKey): void
    {
        $this->cache->deleteItem($cacheKey);
    }
}
