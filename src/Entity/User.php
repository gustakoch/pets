<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
#[ORM\Table('users')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    public const PASSWORD_SIZE = 10;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: 'user.username.not_blank')]
    #[Assert\Length(min: 3, minMessage: 'user.username.min_length')]
    #[Assert\Regex(
        pattern: '/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/',
        message: 'user.username.numbers_not_accepted'
    )]
    private ?string $username = null;

    #[ORM\Column(length: 180)]
    #[Assert\NotBlank(message: 'user.email.not_blank')]
    #[Assert\Email(message: 'user.email.not_email')]
    private ?string $email = null;

    /**
     * @var list<string> The user roles
     */
    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    #[Assert\NotBlank(message: 'user.password.not_blank')]
    #[Assert\Length(min: 8, minMessage: 'user.password.min_length')]
    #[Assert\Regex(
        pattern: '/^(?=.*[A-Z]).*$/',
        message: 'A senha deve incluir pelo menos uma letra maiúscula'
    )]
    #[Assert\Regex(
        pattern: '/^(?=.*[a-z]).*$/',
        message: 'A senha deve incluir pelo menos uma letra minúscula'
    )]
    #[Assert\Regex(
        pattern: '/^(?=.*[0-9]).*$/',
        message: 'A senha deve incluir pelo menos um número'
    )]
    #[Assert\Regex(
        pattern: "/^(?=.*[!@#$%^&*(),.?'\x22:{}|<>]).*$/",
        message: 'A senha deve incluir pelo menos um caractere especial, ex., !@#?'
    )]
    private ?string $password = null;

    #[ORM\Column]
    private bool $isActive = false;

    #[ORM\OneToMany(targetEntity: Pet::class, mappedBy: 'user', orphanRemoval: true)]
    private Collection $pets;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $activationToken = null;

    #[ORM\OneToMany(targetEntity: Veterinarian::class, mappedBy: 'user')]
    private Collection $veterinarians;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $lastLogin = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $activatedAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $updatedAt = null;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
        $this->lastLogin = new \DateTime();
        $this->pets = new ArrayCollection();
        $this->veterinarians = new ArrayCollection();
    }

    #[ORM\PrePersist]
    public function setTimestampsValues()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
        $this->lastLogin = new \DateTime();
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

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     *
     * @return list<string>
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    /**
     * @param list<string> $roles
     */
    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(?string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createAt): static
    {
        $this->createdAt = $createAt;

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

    public function isActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): static
    {
        $this->isActive = $isActive;

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
            $pet->setUser($this);
        }

        return $this;
    }

    public function removePet(Pet $pet): static
    {
        if ($this->pets->removeElement($pet)) {
            // set the owning side to null (unless already changed)
            if ($pet->getUser() === $this) {
                $pet->setUser(null);
            }
        }

        return $this;
    }

    public function getLastLogin(): ?\DateTimeInterface
    {
        return $this->lastLogin;
    }

    public function setLastLogin(?\DateTimeInterface $lastLogin): static
    {
        $this->lastLogin = $lastLogin;

        return $this;
    }

    public function getActivationToken(): ?string
    {
        return $this->activationToken;
    }

    public function setActivationToken(?string $activationToken): static
    {
        $this->activationToken = $activationToken;

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
            $veterinarian->setUser($this);
        }

        return $this;
    }

    public function removeVeterinarian(Veterinarian $veterinarian): static
    {
        if ($this->veterinarians->removeElement($veterinarian)) {
            // set the owning side to null (unless already changed)
            if ($veterinarian->getUser() === $this) {
                $veterinarian->setUser(null);
            }
        }

        return $this;
    }

    public function getActivatedAt(): ?\DateTimeInterface
    {
        return $this->activatedAt;
    }

    public function setActivatedAt(?\DateTimeInterface $activatedAt): static
    {
        $this->activatedAt = $activatedAt;

        return $this;
    }
}
