var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Carbón', 'Hidráulica', 'Gas Natural', 'Solar Fotovoltaica', 'Eólica', 'Biomasa', 'Petróleo/Diesel', 'Geotérmica', 'Cogeneración'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#004756', '#E4C55A', '#00646E', '#73B3C0', '#E98F3E', '#474747', '#B1411E', '#900D0E', '#643623'],
            borderColor: '#fff',
            data: [37, 27.4, 19, 8.1, 6.2, 2.3, 0.8, 0.3, 0.2]
        }]
    },

    // Configuration options go here
    options: {}
});

//second one 

 
var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Industrial', 'Residencial', 'Comercial', 'Otros', 'Agrícola'],
        datasets: [{
            label: 'My Seconds dataset',
            backgroundColor: ['#004756', '#E4C55A', '#00646E', '#73B3C0', '#E98F3E'],
            borderColor: '#fff',
            data: [23, 16, 10, 10, 2]
        }]
    },

    // Configuration options go here
    options: {}
});


