<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20240325143318 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE veterinarian ADD is_phone_whatsapp TINYINT(1) NULL AFTER phone');
        $this->addSql('UPDATE veterinarian SET is_phone_whatsapp = 0');
        $this->addSql('ALTER TABLE veterinarian CHANGE is_phone_whatsapp is_phone_whatsapp TINYINT(1) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE veterinarian DROP is_phone_whatsapp');
    }
}
