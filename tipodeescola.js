Highcharts.chart('tipodeescola', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
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
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: '',
        data: [
            ['Pública', 50],
            ['Particular', 30]
        ]
    }]
});