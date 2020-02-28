import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-pie-chart',
  template: `<div #pieChart></div>`
})
export class PieChartComponent implements AfterViewInit{

  @ViewChild('pieChart') pieChart: ElementRef

  drawChart = () => {

  const data = google.visualization.arrayToDataTable([
    ['Country',   'Premio Medio'],
          ['Piemonte', 45]
  ]);

  const options = {
    region: 'IT', // Africa
          colorAxis: {colors: ['#FFFFFF', 'black', '#1a237e']},
          backgroundColor: '#FFFFFF',
          datalessRegionColor: '#white',
          resolution: 'provinces'
  };

  const chart = new google.visualization.GeoChart(this.pieChart.nativeElement);

  chart.draw(data, options);
}

  ngAfterViewInit() {
    google.charts.load('current', { 'packages': ['geochart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }
}