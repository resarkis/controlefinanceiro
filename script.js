let ctx = document.getElementById('chart').getContext('2d');

let chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
        datasets: [{
        label: "My First datasets",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor:'rgb(255, 99 , 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
        borderWidth: 1
        }]
    },
    options: {}

});


