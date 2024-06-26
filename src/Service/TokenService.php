<?php

namespace App\Service;

use App\Entity\PasswordReset;
use App\Entity\User;
use App\Enum\LevelEnum;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class TokenService
{
    public const ALGORITHM = 'HS256';

    public function __construct(
        private string $secretKey,
        private readonly LoggerService $loggerService,
    ) {
        $this->loggerService->setLoggerChannel('token');
    }

    public function encode(array $payload): string
    {
        return JWT::encode($payload, $this->secretKey, self::ALGORITHM);
    }

    public function decode(string $token): array
    {
        try {
            $decoded = JWT::decode($token, new Key($this->secretKey, self::ALGORITHM));
            $decodedArray = (array) $decoded;

            return $decodedArray;
        } catch (ExpiredException $e) {
            $this->loggerService->setLog(LevelEnum::Info, $e->getMessage(), ['token' => $token]);

            return [
                'error' => true,
                'message' => 'Token expirado',
            ];
        }
    }

    public function isPasswordResetValid(PasswordReset $passwordReset, User $tokenUser): bool
    {
        $now = new \DateTime();
        if ($passwordReset->getExpireAt() < $now) {
            return false;
        }
        if ($passwordReset->getUser() != $tokenUser) {
            return false;
        }
        if ($passwordReset->getUsedAt()) {
            return false;
        }

        return true;
    }
}
