<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20240316220200 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE pets ADD image_path VARCHAR(255) DEFAULT NULL AFTER currently_vaccinated');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE pets DROP image_path');
    }
}
