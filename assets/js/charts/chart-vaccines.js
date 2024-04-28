$(document).ready(function() {
    $.ajax({
        url: '/charts/vaccines',
        type: 'GET',
        dataType: 'json',
        timeout: 20000,
        success: function(response) {
            let data = {
                labels: ['Janeiro', 'Fevereiro', 'Março'],
                datasets: [{
                    label: 'Dataset 1',
                    data: response.vaccines,
                    borderColor: [],
                    backgroundColor: [],
                }],
            };
            const config = {
                type: 'line',
                data: data,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Chart.js Line Chart'
                        }
                    }
                },
            };
            new Chart(document.getElementById('vaccinesChart'), config);
        }
    });
});
