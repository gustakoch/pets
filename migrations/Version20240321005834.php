<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20240321005834 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE users ADD last_login DATETIME NULL AFTER is_active');
        $this->addSql('UPDATE users u SET u.last_login = u.created_at');
        $this->addSql('ALTER TABLE users CHANGE last_login last_login DATETIME NOT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE users DROP last_login');
    }
}
