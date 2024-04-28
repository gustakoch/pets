<?php

namespace App\Trait;

trait InitialsTrait
{
    public function extractFirstTwoInitials(string $string): string
    {
        $words = explode(' ', $string);
        $firstTwoWords = array_slice($words, 0, 2);
        $initials = array_map(fn ($word) => strtoupper($word[0]), $firstTwoWords);

        return implode('', $initials);
    }
}
