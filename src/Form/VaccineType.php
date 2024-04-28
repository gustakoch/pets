<?php

namespace App\Form;

use App\Entity\Pet;
use App\Entity\Vaccine;
use App\Entity\VaccineType as EntityVaccineType;
use App\Entity\Veterinarian;
use App\Repository\PetRepository;
use App\Repository\VaccineTypeRepository;
use App\Repository\VeterinarianRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class VaccineType extends AbstractType
{
    public function __construct(private readonly Security $security)
    {
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nome da vacina',
                'required' => false,
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Descrição',
                'required' => false,
                'attr' => [
                    'style' => 'height: 100px',
                ],
            ])
            ->add('type', EntityType::class, [
                'label' => 'Tipo de vacina',
                'required' => false,
                'class' => EntityVaccineType::class,
                'choice_label' => 'name',
                'placeholder' => 'Selecione',
                'query_builder' => function (VaccineTypeRepository $vaccineTypeRepository) {
                    return $vaccineTypeRepository->createQueryBuilder('vt')
                        ->andWhere('vt.deletedAt IS NULL')
                        ->orderBy('vt.name', 'ASC');
                },
            ])
            ->add('applicationDate', DateType::class, [
                'widget' => 'single_text',
                'label' => 'Data da aplicação',
                'required' => false,
            ])
            ->add('reinforcementAt', DateType::class, [
                'widget' => 'single_text',
                'label' => 'Data do reforço',
                'empty_data' => '',
                'required' => false,
            ])
            ->add('price', NumberType::class, [
                'label' => 'Preço pago',
                'required' => false,
                'empty_data' => '',
                'attr' => [
                    'placeholder' => '0,00',
                ],
            ])
            ->add('manufacturer', TextType::class, [
                'label' => 'Fabricante',
                'required' => false,
            ])
            ->add('comments', TextareaType::class, [
                'label' => 'Observações',
                'required' => false,
                'attr' => [
                    'style' => 'height: 150px',
                ],
            ])
            ->add('pet', EntityType::class, [
                'label' => 'Nome do pet',
                'class' => Pet::class,
                'choice_label' => 'name',
                'placeholder' => 'Selecione',
                'required' => false,
                'query_builder' => function (PetRepository $petRepository) {
                    $user = $this->security->getUser();

                    return $petRepository->createQueryBuilder('p')
                        ->andWhere('p.deletedAt IS NULL')
                        ->andWhere('p.user = :user')
                        ->setParameter('user', $user)
                        ->orderBy('p.name', 'ASC');
                },
            ])
            ->add('veterinarian', EntityType::class, [
                'label' => 'Veterinário que aplicou a vacina',
                'class' => Veterinarian::class,
                'choice_label' => 'name',
                'placeholder' => 'Selecione',
                'required' => false,
                'query_builder' => function (VeterinarianRepository $veterinarianRepository) {
                    $user = $this->security->getUser();

                    return $veterinarianRepository->createQueryBuilder('v')
                        ->andWhere('v.deletedAt IS NULL')
                        ->andWhere('v.user = :user')
                        ->setParameter('user', $user)
                        ->orderBy('v.name', 'ASC');
                },
            ])
            ->add('applicationDateInitial', DateType::class, [
                'label' => 'Data de início da aplicação',
                'required' => false,
                'mapped' => false,
                'widget' => 'single_text',
            ])
            ->add('applicationDateEnd', DateType::class, [
                'label' => 'Data de fim da aplicação',
                'required' => false,
                'mapped' => false,
                'widget' => 'single_text',
            ])
            ->add('reinforcementDateInitial', DateType::class, [
                'label' => 'Data de início do reforço',
                'required' => false,
                'mapped' => false,
                'widget' => 'single_text',
            ])
            ->add('reinforcementDateEnd', DateType::class, [
                'label' => 'Data de fim do reforço',
                'required' => false,
                'mapped' => false,
                'widget' => 'single_text',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Vaccine::class,
        ]);
    }
}
