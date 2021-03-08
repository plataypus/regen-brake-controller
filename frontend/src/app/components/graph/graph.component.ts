import { Component, Input, OnInit, ViewChild, OnChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, OnChanges {
  @Input() dataList: any[];
  @Input() settings: any;

  public lineChartData: ChartDataSets[] = [{ data: [], fill:false, pointRadius:0}];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    scales: {
      xAxes: [
        {
          type: 'linear',
          distribution: 'linear',
          ticks:{
            // autoSkipPadding: 5,
            stepSize: 10,
            fontColor: 'rgb(0,0,0)',
            padding: 5,
            min: 0,
            max: 100,
            maxRotation: 0,
          },
          gridLines:{
            color: 'rgb(150, 150, 150)',
            drawTicks: false, 
            zeroLineColor: 'rgba(150, 150, 150, 0.1)'
          },
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Track distance",
            lineHeight: 0.5
          }
        }
      ],
      yAxes: [
        {
          position: 'left',
          ticks:{
            autoSkipPadding: 10,
            min: 0,
            // max: 3,
            fontColor: 'rgb(0,0,0)',
            padding: 5,
            // suggestedMax: 15,
          },
          gridLines:{
            color: 'rgba(150, 150, 150)',
            drawTicks: false
          },
          scaleLabel: {
            display: true,
            labelString: "Speed",
            lineHeight: 0.5
          }
        }
      ],
    },
    maintainAspectRatio: false,
    elements:{
      line:{
        tension:0
      },
    },
    legend: {
      display: false
    },
    animation:{
      duration: 0
    },
    plugins: {
      datalabels: {
        display: false,
      }
    }
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(0, 255, 0, 0.3)',
      borderColor: 'rgba(26, 196, 151, 1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    }
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginDataLabels];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() { }

  ngOnInit(): void {
    this.updateChart();
    // this.lineChartOptions.scales.yAxes[0].ticks.max = this.settings.maxY
    // this.lineChartOptions.scales.xAxes[0].ticks.max = this.settings.maxX
  }

  ngOnChanges(): void {
    this.updateChart();
  }

  updateChart(): void {
    this.lineChartData[0].data = this.dataList
    this.lineChartLabels = this.dataList.map((data) => data.x.toFixed(2))
    // console.log(this.settings)
    // this.lineChartOptions.scales.yAxes[0].ticks.max = this.settings.maxY
  }
}
