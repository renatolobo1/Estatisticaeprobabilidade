
Highcharts.chart('tipodeescola', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 60,
            beta: 0,
           
        }
    },
    
    colors: ['#510E80', '#0424D9'],
    title: {
        text: 'Tipo de Escola'
    },
    tooltip: {
        pointFormat: '{series.name} <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name} <br> Quantidade {point.y} <br> {point.percentage:.1f}%'
            }
        }
    },
    series: [{
        type: 'pie',
        name: '',
        data: 
            [
                {
                    name: 'Particular',
                    y: 07
                },

           {
                    name: 'Pública',
                    y: 09
                }
        ],
    }]
});

