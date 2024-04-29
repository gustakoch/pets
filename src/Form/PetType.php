<?php

namespace App\Form;

use App\Entity\Pet;
use App\Entity\Specie;
use App\Entity\Veterinarian;
use App\Repository\SpecieRepository;
use App\Repository\VeterinarianRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PetType extends AbstractType
{
    public function __construct(private readonly Security $security)
    {
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'required' => false,
                'label' => 'Nome do pet',
            ])
            ->add('breed', TextType::class, [
                'label' => 'Descrição da raça',
                'required' => false,
            ])
            ->add('color', TextType::class, [
                'label' => 'Descrição de suas cores',
                'required' => false,
            ])
            ->add('dateOfBirth', DateType::class, [
                'widget' => 'single_text',
                'required' => false,
                'empty_data' => '',
                'label' => 'Data de nascimento',
            ])
            ->add('specie', EntityType::class, [
                'required' => false,
                'class' => Specie::class,
                'choice_label' => 'name',
                'label' => 'Espécie',
                'placeholder' => 'Selecione',
                'query_builder' => function (SpecieRepository $specieRepository) {
                    return $specieRepository->createQueryBuilder('s')
                        ->orderBy('s.name', 'ASC');
                },
            ])
            ->add('imageFile', FileType::class, [
                'required' => false,
                'label' => 'Selecione uma foto (opcional)',
                'mapped' => false,
                'empty_data' => '',
            ])
            ->add('veterinarians', EntityType::class, [
                'required' => false,
                'class' => Veterinarian::class,
                'choice_label' => 'name',
                'label' => 'Selecione o(s) veterionário(s) (opcional)',
                'mapped' => false,
                'multiple' => true,
                'attr' => [
                    'data-selected-text-format' => 'count > 2',
                ],
                'query_builder' => function (VeterinarianRepository $veterinarianRepository) {
                    $user = $this->security->getUser();

                    return $veterinarianRepository->createQueryBuilder('v')
                        ->andWhere('v.deletedAt IS NULL')
                        ->andWhere('v.user = :user')
                        ->setParameter('user', $user)
                        ->orderBy('v.name', 'ASC');
                },
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Pet::class,
        ]);
    }
}
