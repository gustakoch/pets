<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20240401135658 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE veterinarians ADD user_id INT NULL AFTER address_id');
        $this->addSql('UPDATE veterinarians SET user_id = 1');
        $this->addSql('ALTER TABLE veterinarians CHANGE user_id user_id INT NOT NULL');
        $this->addSql('ALTER TABLE veterinarians ADD CONSTRAINT FK_6B2A679CA76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('CREATE INDEX IDX_6B2A679CA76ED395 ON veterinarians (user_id)');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE veterinarians DROP FOREIGN KEY FK_6B2A679CA76ED395');
        $this->addSql('DROP INDEX IDX_6B2A679CA76ED395 ON veterinarians');
        $this->addSql('ALTER TABLE veterinarians DROP user_id');
    }
}
