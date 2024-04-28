<?php

namespace App\Entity;

use App\Repository\VeterinarianRepository;
use App\Trait\InitialsTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: VeterinarianRepository::class)]
#[ORM\Table('veterinarians')]
class Veterinarian
{
    use InitialsTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: 'vet.name.not_blank')]
    private ?string $name = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: 'vet.phone.not_blank')]
    private ?string $phone = null;

    #[ORM\Column]
    private ?bool $isPhoneWhatsapp = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Assert\NotBlank(message: 'vet.specializations.not_blank')]
    private ?string $specializations = null;

    #[ORM\ManyToMany(targetEntity: Pet::class, mappedBy: 'veterinarians')]
    private Collection $pets;

    #[ORM\OneToOne(inversedBy: 'veterinarian', cascade: ['persist', 'remove'])]
    private ?Address $address = null;

    #[ORM\ManyToOne(inversedBy: 'veterinarians')]
    private ?User $user = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $deletedAt = null;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
        $this->pets = new ArrayCollection();
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

    public function setName(?string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): static
    {
        $this->phone = $phone;

        return $this;
    }

    public function getSpecializations(): ?string
    {
        return $this->specializations;
    }

    public function setSpecializations(?string $specializations): static
    {
        $this->specializations = $specializations;

        return $this;
    }

    public function getAddress(): ?Address
    {
        return $this->address;
    }

    public function setAddress(?Address $address): static
    {
        $this->address = $address;

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

    public function isPhoneWhatsapp(): ?bool
    {
        return $this->isPhoneWhatsapp;
    }

    public function setIsPhoneWhatsapp(bool $isPhoneWhatsapp): static
    {
        $this->isPhoneWhatsapp = $isPhoneWhatsapp;

        return $this;
    }

    /**
     * @return Collection<int, Pet>
     */
    public function getPets(): Collection
    {
        return $this->pets;
    }

    public function addPet(Pet $pet): static
    {
        if (!$this->pets->contains($pet)) {
            $this->pets->add($pet);
            $pet->addVeterinarian($this);
        }

        return $this;
    }

    public function removePet(Pet $pet): static
    {
        if ($this->pets->removeElement($pet)) {
            $pet->removeVeterinarian($this);
        }

        return $this;
    }

    public function serialize(Veterinarian $veterinarian): array
    {
        return [
            'name' => $veterinarian->getName(),
            'email' => $veterinarian->getEmail(),
            'phone' => $veterinarian->getPhone(),
            'isPhoneWhatsapp' => $veterinarian->isPhoneWhatsapp(),
            'specializations' => $veterinarian->getSpecializations(),
            'createdAt' => $veterinarian->getCreatedAt(),
            'updatedAt' => $veterinarian->getUpdatedAt(),
            'address' => [
                'street' => $veterinarian->getAddress()->getStreet(),
                'number' => $veterinarian->getAddress()->getNumber(),
                'complement' => $veterinarian->getAddress()->getComplement(),
                'district' => $veterinarian->getAddress()->getDistrict(),
                'state' => [
                    'name' => $veterinarian->getAddress()->getState()->getName(),
                    'acronym' => $veterinarian->getAddress()->getState()->getAcronym(),
                ],
                'city' => [
                    'name' => $veterinarian->getAddress()->getCity()->getName(),
                    'state' => $veterinarian->getAddress()->getCity()->getState()->getId(),
                ],
                'zipcode' => $veterinarian->getAddress()->getZipcode(),
            ],
        ];
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
