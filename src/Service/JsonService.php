<?php

namespace App\Service;

class JsonService
{
    public static function response(bool $error, string $message, array $data): array
    {
        return [
            'error' => $error,
            'message' => $message,
            'data' => $data,
        ];
    }
}
