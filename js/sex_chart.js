"use strict";
// 男女比パイチャート
{
  var options = {
    series: [55, 45],
    chart: {
    width: 400,
    type: 'pie',
  },
  labels: ['male', 'female'],
  colors: ['#0099FF', '#FF0099'],
  fill: {
    type: 'image',
    opacity: 0.85,
    image: {
        src: ['./img/change_generation/LINE_ALBUM_230103_10.jpg', './img/plan/LINE_ALBUM_230104.jpg'],
      width: 20,
      imagedHeight: 20
    },
  },
  stroke: {
    width: 2,
    colors: "white"
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#111']
    },
    background: {
      enabled: true,
      foreColor: '#fff',
      borderWidth: 0
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 340
      },
      legend: {
        position: 'top',
        labels: {
          colors: "white",
      },
      }
    }
  }]
  };
  
  var sex_chart = new ApexCharts(document.querySelector(".sex_chart"), options);
  sex_chart.render();

}


