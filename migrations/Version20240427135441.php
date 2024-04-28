<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20240427135441 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE emails_vaccines (id INT AUTO_INCREMENT NOT NULL, vaccine_id INT NOT NULL, expired TINYINT(1) NOT NULL, times_sent INT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_D365A8942BFE75C3 (vaccine_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE emails_vaccines ADD CONSTRAINT FK_D365A8942BFE75C3 FOREIGN KEY (vaccine_id) REFERENCES vaccines (id)');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE emails_vaccines DROP FOREIGN KEY FK_D365A8942BFE75C3');
        $this->addSql('DROP TABLE emails_vaccines');
    }
}
