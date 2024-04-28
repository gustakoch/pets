<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20240401195941 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE users ADD activated_at DATETIME DEFAULT NULL AFTER is_active');
        $this->addSql('ALTER TABLE veterinarians CHANGE user_id user_id INT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE users DROP activated_at');
        $this->addSql('ALTER TABLE veterinarians CHANGE user_id user_id INT NOT NULL');
    }
}
