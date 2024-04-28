<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20240414141350 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE vaccines_types ADD user_id INT NULL AFTER `description`');
        $this->addSql('ALTER TABLE vaccines_types ADD CONSTRAINT FK_189B19C4A76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('CREATE INDEX IDX_189B19C4A76ED395 ON vaccines_types (user_id)');
        $this->addSql('UPDATE vaccines_types SET user_id = 1');
        $this->addSql('ALTER TABLE vaccines_types CHANGE user_id user_id INT NOT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE vaccines_types DROP FOREIGN KEY FK_189B19C4A76ED395');
        $this->addSql('DROP INDEX IDX_189B19C4A76ED395 ON vaccines_types');
        $this->addSql('ALTER TABLE vaccines_types DROP user_id');
    }
}
