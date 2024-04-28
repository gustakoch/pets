<?php

namespace App\Form;

use App\Entity\Address;
use App\Entity\State;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AddressType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('street', TextType::class, [
                'label' => 'Rua',
                'required' => false,
            ])
            ->add('number', NumberType::class, [
                'label' => 'Número',
                'required' => false,
            ])
            ->add('complement', TextType::class, [
                'label' => 'Complemento',
                'required' => false,
            ])
            ->add('district', TextType::class, [
                'label' => 'Bairro',
                'required' => false,
            ])
            ->add('zipcode', TextType::class, [
                'label' => 'CEP',
                'required' => false,
            ])
            ->add('state', EntityType::class, [
                'label' => 'Estado',
                'class' => State::class,
                'choice_label' => 'name',
                'placeholder' => 'Selecione o estado',
                'required' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Address::class,
        ]);
    }
}
