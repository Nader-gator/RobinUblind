import ReactChartkick, { LineChart, AreaChart } from 'react-chartkick'
import Chart from 'chart.js'
import React from 'react'
ReactChartkick.addAdapter(Chart)

Array.min = function (array) {
  return Math.min.apply(Math, array);
};
Array.max = function (array) {
  return Math.max.apply(Math, array);
};

const DrawChart = ({data}) => {
  const chartOptions = { //this is the "options that gets passed to chart, see bottom for exampel"
    layout: {
      padding: { left: 10, right: 5, top: 5, bottom: 2 }
    },
    scales: { //hide the axes
      xAxes: [{
        display: false
      }],
      yAxes:[{
        display: false,
        ticks:{min: Array.min(Object.values(data)) ,max: Array.max(Object.values(data))}
      }]
    },
    elements: {
      point: {
        radius: 0
      }
    },
    responsive: true,
    animation: {
      duration: 1000,
      easing: 'easeOutQuart'
    },
    tooltips: {
      mode: 'label',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    
    
  }

  return (
    <LineChart id="stock-chart" 
    curve={false} 
    legend={false} 
    prefix="$" 
    thousands="," 
    decimal="." 
    messages={{ empty: "No data" }} 
    data={data} 
    width="710px" 
    height="300px" 
    colors={["#61ca9d"]} 
    library={chartOptions}
    />
  )
}
  // scales: {
  //   yAxes: [{
  //     ticks: {
  //       min: Math.min.apply(this, data),
  //       max: Math.max.apply(this, data),
  //     }
  //   }]
  // }

export default DrawChart


/* SAMPLE FOR CHARTING FUNCTION< MORE AT https://www.chartjs.org/docs/latest/
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



*/


  
