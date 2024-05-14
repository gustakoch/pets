<?php

namespace App\Service;

use App\Enum\LevelEnum;
use Monolog\Formatter\LineFormatter;
use Monolog\Handler\BrowserConsoleHandler;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\TelegramBotHandler;
use Monolog\Level;
use Monolog\Logger;
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;

class LoggerService
{
    private Logger $logger;

    public function __construct(
        private readonly ContainerBagInterface $containerBag,
    ) {
    }

    public function setLoggerChannel(string $loggerChannel): void
    {
        $this->logger = new Logger($loggerChannel);
        $this->logger->pushHandler(new BrowserConsoleHandler(Level::Debug));
        $this->logger->pushHandler(new StreamHandler(__DIR__.'/../../var/log/general.log', Level::Info));
        $telegramHandle = new TelegramBotHandler($this->containerBag->get('telegram_api_key'), $this->containerBag->get('telegram_channel'), Level::Critical);
        $telegramHandle->setFormatter(new LineFormatter('[%datetime%] [%level_name%] - %message%', 'd/m/Y H:i:s'));
        $this->logger->pushHandler($telegramHandle);
        $this->logger->pushProcessor(function ($record) {
            $record['extra']['host'] = $_SERVER['HTTP_HOST'];
            $record['extra']['uri'] = $_SERVER['REQUEST_URI'];
            $record['extra']['method'] = $_SERVER['REQUEST_METHOD'];
            $record['extra']['user_agent'] = $_SERVER['HTTP_USER_AGENT'];

            return $record;
        });
    }

    public function setLog(LevelEnum $level, string $message, array $context = []): void
    {
        $this->logger->{$level->value}($message, $context);
    }
}
