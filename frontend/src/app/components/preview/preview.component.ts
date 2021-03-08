import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, OnChanges {
  // trackLength: number = 1;
  @Input() brakeSpeed: number = 1;
  @Input() brakeTorque: number = 1;
  @Input() acceleration: number = 0.5;
  minAcceleration: number = 0.5;
  state: any = {
    started: false,
    paused: -1,
    ended: false,
  }
  graphData: any = {};
  graphSettings: any = {
    maxY: 1,
  }
  constructor(private wsService: WebsocketService) { }

  ngOnInit(): void {
    this.wsService.stateUpdate.subscribe(state => {
      if (state){
        // this.state = state;
      }
    })
    this.computeGraphData()
  }

  ngOnChanges(): void {
    // this.computeGraphData()
  }

  computeGraphData(): void {
    const finalD = Math.pow(this.brakeSpeed, 2) / (2*this.acceleration)
    const arr = Array.from({length: 11}, (_, index) => index);
    const data = arr.map((num) => {
      const x = finalD / 10 * num
      const y = Math.pow((2*this.acceleration*x), 0.5)
      return {x, y}
    });
    const finalY = Math.pow((2*this.acceleration*finalD), 0.5)
    data.push({x: 50, y: finalY});
    data.push({x: 100, y:0});
    this.graphData = data

    // this.graphSettings = {maxY: finalY + 1}
    // console.log(this.graphData)
  }


  onStart(): void {
    this.wsService.control({
      command: "start",
      params: {
        brakeTorque: this.brakeTorque, 
        brakeSpeed: this.brakeSpeed,
        acceleration: this.acceleration,
      }
    })

    this.state = {
      started: true,
      paused: 0,
      ended: false,
    }
  }
  onPause(): void {
    this.wsService.control({
      command: "pause",
    })

    this.state = {
      started: true,
      paused: this.state.paused === 0 ? 1: 0,
      ended: false,
    }
  }

  onReset(): void {
    this.wsService.control({
      command: "reset",
    })

    this.state = {
      started: false,
      paused: -1,
      ended: false,
    }
  }

  speedChange(): void {
    const newMin = (Math.floor(Math.pow(this.brakeSpeed, 2) / 50) + 1) * 0.5; 
    this.acceleration = newMin;
    this.minAcceleration = newMin;
    this.computeGraphData()
  }
}
