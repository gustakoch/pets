<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20240326200543 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE pet_veterinarian (pet_id INT NOT NULL, veterinarian_id INT NOT NULL, INDEX IDX_AAD40354966F7FB6 (pet_id), INDEX IDX_AAD40354804C8213 (veterinarian_id), PRIMARY KEY(pet_id, veterinarian_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE pet_veterinarian ADD CONSTRAINT FK_AAD40354966F7FB6 FOREIGN KEY (pet_id) REFERENCES pets (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE pet_veterinarian ADD CONSTRAINT FK_AAD40354804C8213 FOREIGN KEY (veterinarian_id) REFERENCES veterinarians (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE pet_veterinarian DROP FOREIGN KEY FK_AAD40354966F7FB6');
        $this->addSql('ALTER TABLE pet_veterinarian DROP FOREIGN KEY FK_AAD40354804C8213');
        $this->addSql('DROP TABLE pet_veterinarian');
    }
}
