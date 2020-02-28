import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-pie-chart',
  template: `<div #pieChart style="width: 100vw; height: 100vh;"></div>`
})
export class PieChartComponent implements AfterViewInit{

  @ViewChild('pieChart') pieChart: ElementRef

  drawChart = () => {

  const data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
  ]);

  const options = {
    title: 'My Daily Activities',
    legend: {position: 'top'}
  };

  const chart = new google.visualization.PieChart(this.pieChart.nativeElement);

  chart.draw(data, options);
}

  ngAfterViewInit() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }
}