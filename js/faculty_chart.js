"use strict";

// 学部比パイチャート
{
  var options = {
    series: [14, 26, 16, 13, 30, 1],
    width: 400,
    chart: {
    type: 'donut',
  },
  labels: ['理工', '経済', '商', '文', '法', 'SFC'],
  colors: ['#228EFA', '#40DE92', '#FAB01A', '#DE7A8A', '#775ED0', '#6E6E6E'],
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
        }
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector(".faculty_chart"), options);
  chart.render();
}
