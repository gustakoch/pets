$(function() {
    $('#form_veterinarian_phone').mask('(00) 00000-0000');
    $('#form_address_zipcode').mask('00000-000');

    $('.state-select').change(function() {
        let stateID = $(this).val();
        if (stateID) {
            carregarCidadesPorEstado(stateID);
        } else {
            $('.city-select').empty().append($('<option>').text('Selecione o estado primeiro'));
        }
    });

    setTimeout(function() {
        console.log('carregaCidades');
        let selectState = $('.state-select');
        if (selectState.val()) {
            carregarCidadesPorEstado(selectState.val());
        }
    }, 100)

    $('#form_address_zipcode').blur(function(e) {
        let zipcode = $(this).val();
        $('#form_address_street').val('');
        $('#form_address_complement').val('');
        $('#form_address_district').val('');
        $('#form_address_state').val('');
        $('#city').val('');

        $.ajax({
            url: `/address/zipcode/${zipcode}`,
            method: 'GET',
            dataType: 'json',
            beforeSend: function() {
            },
            success: function(response) {
                if (response.error) {
                    return;
                }
                let data = response.data;
                $('#form_address_street').val(data.street);
                $('#form_address_complement').val(data.complement);
                $('#form_address_district').val(data.district);
                $('#form_address_state').val(data.state.id);
                carregarCidadesPorEstado(data.state.id);
                setTimeout(function() {
                    $('#city').val(data.city.id);
                }, 300)
            },
            error: function(xhr, status, error) {
                return;
            }
        });
    })

    function carregarCidadesPorEstado(stateId) {
        $.ajax({
            url: `/address/cities/${stateId}`,
            method: 'GET',
            dataType: 'json',
            beforeSend: function() {
                $('.box-spinner-city-select').show();
                $('.box-city-select').hide();
            },
            success: function(response) {
                if (response.error) {
                    $('.box-spinner-city-select').hide();
                    $('.box-city-select').show();
                    return;
                }
                let citySelect = $('.city-select');
                citySelect.empty();
                $.each(response.data, function(i, city) {
                    citySelect.append($('<option>').attr('value', city.id).text(city.name));
                });
                $('.box-spinner-city-select').hide();
                $('.box-city-select').show();
            },
            error: function(xhr, status, error) {
                $('.box-spinner-city-select').hide();
                $('.box-city-select').show();
            }
        });
    }
});
