// Build the chart
Highcharts.chart('faixaetaria', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Faixa Etária'
    },
    credits: {  // tirar a marcação de quem fez
        enabled: false
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Total',
        colorByPoint: true,
        data: [{
            name: '10 Anos',
            y: 21,
            sliced: true,
            selected: true
        }, {
            name: '09 Anos',
            y: 2
        }, {
            name: '08 Anos',
            y: 5
        }, {
            name: '07 Anos',
            y: 7
        }]
    }]
});

Highcharts.chart('faixaetaria1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Faixa Etária'
    },
    credits: {  // tirar a marcação de quem fez
        enabled: false
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Total',
        colorByPoint: true,
        data: [{
            name: '10 Anos',
            y: 21,
            sliced: true,
            selected: true
        }, {
            name: '09 Anos',
            y: 2
        }, {
            name: '08 Anos',
            y: 5
        }, {
            name: '07 Anos',
            y: 7
        }]
    }]
});