<?php

namespace App\Service;

use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class UploadService
{
    public function __construct(
        private ContainerBagInterface $containerBag,
    ) {
    }

    public function picture(mixed $imagePath, string $folder, string $filename)
    {
        try {
            $uploadedFilesDirectory = $this->containerBag->get('kernel.project_dir').$folder;
            $imagePath->move($uploadedFilesDirectory, $filename);
        } catch (FileException $e) {
            throw new FileException($e->getMessage());
        }
    }
}
