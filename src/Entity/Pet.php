<?php

namespace App\Entity;

use App\Repository\PetRepository;
use App\Trait\InitialsTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: PetRepository::class)]
#[ORM\Table(name: 'pets')]
class Pet
{
    use InitialsTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'pets')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: 'pet.name.not_blank')]
    #[Assert\Length(min: 3, minMessage: 'pet.name.min_length')]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: 'pet.breed.not_blank')]
    private ?string $breed = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: 'pet.color.not_blank')]
    private ?string $color = null;

    #[ORM\ManyToOne(inversedBy: 'pets')]
    #[Assert\NotBlank(message: 'pet.specie.not_blank')]
    private ?Specie $specie = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Assert\NotBlank(message: 'pet.date_of_birth.not_blank')]
    private ?\DateTimeInterface $dateOfBirth = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Assert\Image()]
    #[Assert\File(groups: ['create'])]
    private ?string $imagePath = null;

    #[ORM\ManyToMany(targetEntity: Veterinarian::class, inversedBy: 'pets')]
    private Collection $veterinarians;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\OneToMany(targetEntity: Vaccine::class, mappedBy: 'pet')]
    private Collection $vaccines;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $deletedAt = null;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
        $this->veterinarians = new ArrayCollection();
        $this->vaccines = new ArrayCollection();
    }

    #[ORM\PrePersist]
    public function setTimestamps()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
    }

    #[ORM\PreUpdate]
    public function setUpdatedAtValue()
    {
        $this->updatedAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getBreed(): ?string
    {
        return $this->breed;
    }

    public function setBreed(string $breed): static
    {
        $this->breed = $breed;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): static
    {
        $this->color = $color;

        return $this;
    }

    public function getSpecie(): ?Specie
    {
        return $this->specie;
    }

    public function setSpecie(?Specie $specie): static
    {
        $this->specie = $specie;

        return $this;
    }

    public function getDateOfBirth(): ?\DateTimeInterface
    {
        return $this->dateOfBirth;
    }

    public function setDateOfBirth(?\DateTimeInterface $dateOfBirth): static
    {
        $this->dateOfBirth = $dateOfBirth;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getImagePath(): ?string
    {
        return $this->imagePath;
    }

    public function setImagePath(?string $imagePath): static
    {
        $this->imagePath = $imagePath;

        return $this;
    }

    public function getCurrentAge(\DateTime $dateOfBirth): string
    {
        $actualDate = new \DateTime();
        $diff = $actualDate->diff($dateOfBirth);

        return "{$diff->y} anos de idade";
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection<int, Veterinarian>
     */
    public function getVeterinarians(): Collection
    {
        return $this->veterinarians;
    }

    public function addVeterinarian(Veterinarian $veterinarian): static
    {
        if (!$this->veterinarians->contains($veterinarian)) {
            $this->veterinarians->add($veterinarian);
        }

        return $this;
    }

    public function removeVeterinarian(Veterinarian $veterinarian): static
    {
        $this->veterinarians->removeElement($veterinarian);

        return $this;
    }

    /**
     * @return Collection<int, Vaccine>
     */
    public function getVaccines(): Collection
    {
        return $this->vaccines;
    }

    public function addVaccine(Vaccine $vaccine): static
    {
        if (!$this->vaccines->contains($vaccine)) {
            $this->vaccines->add($vaccine);
            $vaccine->setPet($this);
        }

        return $this;
    }

    public function removeVaccine(Vaccine $vaccine): static
    {
        if ($this->vaccines->removeElement($vaccine)) {
            // set the owning side to null (unless already changed)
            if ($vaccine->getPet() === $this) {
                $vaccine->setPet(null);
            }
        }

        return $this;
    }

    public function getDeletedAt(): ?\DateTimeInterface
    {
        return $this->deletedAt;
    }

    public function setDeletedAt(?\DateTimeInterface $deletedAt): static
    {
        $this->deletedAt = $deletedAt;

        return $this;
    }
}
