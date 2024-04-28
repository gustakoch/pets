<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20240404223654 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE vaccines (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, pet_id INT NOT NULL, veterinarian_id INT NOT NULL, type_id INT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, application_date DATE NOT NULL, reinforcement_at DATETIME NOT NULL, price DOUBLE PRECISION NOT NULL, manufacturer VARCHAR(255) NOT NULL, comments LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX IDX_A7CF9181A76ED395 (user_id), INDEX IDX_A7CF9181966F7FB6 (pet_id), INDEX IDX_A7CF9181804C8213 (veterinarian_id), INDEX IDX_A7CF9181C54C8C93 (type_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE vaccines_types (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE vaccines ADD CONSTRAINT FK_A7CF9181A76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE vaccines ADD CONSTRAINT FK_A7CF9181966F7FB6 FOREIGN KEY (pet_id) REFERENCES pets (id)');
        $this->addSql('ALTER TABLE vaccines ADD CONSTRAINT FK_A7CF9181804C8213 FOREIGN KEY (veterinarian_id) REFERENCES veterinarians (id)');
        $this->addSql('ALTER TABLE vaccines ADD CONSTRAINT FK_A7CF9181C54C8C93 FOREIGN KEY (type_id) REFERENCES vaccines_types (id)');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE vaccines DROP FOREIGN KEY FK_A7CF9181A76ED395');
        $this->addSql('ALTER TABLE vaccines DROP FOREIGN KEY FK_A7CF9181966F7FB6');
        $this->addSql('ALTER TABLE vaccines DROP FOREIGN KEY FK_A7CF9181804C8213');
        $this->addSql('ALTER TABLE vaccines DROP FOREIGN KEY FK_A7CF9181C54C8C93');
        $this->addSql('DROP TABLE vaccines');
        $this->addSql('DROP TABLE vaccines_types');
    }
}
