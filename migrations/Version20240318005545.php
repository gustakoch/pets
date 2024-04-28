<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20240318005545 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE pets ADD user_id INT NOT NULL AFTER specie_id');
        $this->addSql('ALTER TABLE pets ADD CONSTRAINT FK_8638EA3FA76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('CREATE INDEX IDX_8638EA3FA76ED395 ON pets (user_id)');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE pets DROP FOREIGN KEY FK_8638EA3FA76ED395');
        $this->addSql('DROP INDEX IDX_8638EA3FA76ED395 ON pets');
        $this->addSql('ALTER TABLE pets DROP user_id');
    }
}
