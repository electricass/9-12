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





//MAPA ARBOL
anychart.onDocumentReady(function () {
    var data = anychart.data.tree([
        {name: 'Eurasia',
            children:[
                {name: 'Obtenci{on de energía en Chile', children:[
                    {name: 'Fuentes no renovables', children:[
                        {name:'Carbón', value: 37, capital: 'y'},
                        {name: 'Gas Natural', value: 19, capital: 'y'},
                        {name: 'Petróleo/Diesel', value: 0.8, capital: 'y'},
                        {name: 'Cogeneración', value: 0.2, capital: 'y'}
                        
                    ]}


                    {name: 'Fuentes renovables', children:[
                    {name:'Hidráulica', value: 27.4, capital: 'x'},
                    {name: 'Solar Fotovoltaica', value: 8.1, capital: 'x'},
                    {name: 'Eólica', value: 26.2, capital: 'x'},
                    {name: 'Biomasa', value: 2.3, capital: 'x'},
                    {name: 'Geotérmica', value: 0.3, capital: 'x'},
                    {},



                    ]}

}]);




//                ]},
//                {name: 'Europe', children: [
 //                   {name: 'Northern Europe', children:[
 //                       {name: 'Finland', value: 338424, capital: 'Helsinki'},
 //                       {name: 'Great Britain', value: 209331, capital: 'London'},
    //                    {name: 'Ireland', value: 84421, capital: 'Dublin'},
  //                      {name: 'Scandinavia', value: 928057}
      //              ]}
        //        ]}
   //         ]}
   // ]);

    // Creates Tree map.
    var chart = anychart.treeMap(data);

    chart.title('Create a Tree Map');
    chart.container('mapaArbol');
    chart.draw();
});


