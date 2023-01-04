"use strict";

// 学部比パイチャート
{
  var options = {
    series: [59, 31, 22, 12, 23],
    chart: {
    width: 500,
    type: 'pie',
  },
  labels: ['理工学部', '経済学部', '商学部', '文学部', '法学部', 'SFC' ],
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
  
  var faculty_chart = new ApexCharts(document.querySelector(".faculty_chart"), options);
  faculty_chart.render();

}
