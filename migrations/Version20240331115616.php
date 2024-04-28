<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20240331115616 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE users ADD activation_token VARCHAR(100) NULL AFTER password');
        $this->addSql('UPDATE users SET activation_token = "token"');
        $this->addSql('ALTER TABLE users CHANGE activation_token activation_token VARCHAR(100) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE users DROP activation_token');
    }
}
