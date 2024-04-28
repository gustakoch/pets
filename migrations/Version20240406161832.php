<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20240406161832 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE pets ADD deleted_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE vaccines ADD deleted_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE veterinarians ADD deleted_at DATETIME DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE pets DROP deleted_at');
        $this->addSql('ALTER TABLE vaccines DROP deleted_at');
        $this->addSql('ALTER TABLE veterinarians DROP deleted_at');
    }
}
