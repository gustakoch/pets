<?php

namespace App\Service;

use App\Enum\LevelEnum;
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class UploadService
{
    public function __construct(
        private ContainerBagInterface $containerBag,
        private readonly LoggerService $loggerService,
    ) {
        $this->loggerService->setLoggerChannel('upload');
    }

    public function picture(mixed $imagePath, string $folder, string $filename)
    {
        try {
            $uploadedFilesDirectory = $this->containerBag->get('kernel.project_dir').$folder;
            $imagePath->move($uploadedFilesDirectory, $filename);
        } catch (FileException $e) {
            $this->loggerService->setLog(LevelEnum::Error, $e->getMessage(), ['imagePath' => $imagePath, 'folder' => $folder, 'filename' => $filename]);
            throw new FileException($e->getMessage());
        }
    }
}
