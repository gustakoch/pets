<?php

namespace App\Form;

use App\Entity\Veterinarian;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class VeterinarianType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nome do veterinário',
                'required' => false,
            ])
            ->add('email', TextType::class, [
                'label' => 'E-mail',
                'required' => false,
            ])
            ->add('phone', TextType::class, [
                'label' => 'Telefone/WhatsApp',
                'required' => false,
            ])
            ->add('isPhoneWhatsapp', CheckboxType::class, [
                'label' => 'Telefone possui WhatsApp',
                'required' => false,
            ])
            ->add('specializations', TextareaType::class, [
                'label' => 'Descreva suas especializações',
                'attr' => [
                    'style' => 'height: 120px',
                ],
                'required' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Veterinarian::class,
        ]);
    }
}
