Highcharts.chart('lobo', {

    chart: {
        styledMode: true
    },

    title: {
        text: 'Qual a fase de escrita do 1 ao 3 ano do Ensino Fundamental'
    },
    credits: {  // tirar a marcação de quem fez
        enabled: false
    },
 

    series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data: [
            ['Pré-Silábica', 29.9, false],
            ['Silábica', 71.5, false],
            ['Silábica Alfabética', 106.4, false],
            ['Alfabética', 129.2, false]
        ],
        showInLegend: true
    }]
});
Highcharts.chart('feio', {

    chart: {
        styledMode: true
    },

    title: {
        text: 'Qual a fase de escrita do 1 ao 3 ano do Ensino Fundamental'
    },
    credits: {
        enabled: false
    },

    

    series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data: [
            ['Pré-Silábica', 29.9, false],
            ['Silábica', 71.5, false],
            ['Silábica Alfabética', 106.4, false],
            ['Alfabética', 129.2, false]
        ],
        showInLegend: true
    }]
});