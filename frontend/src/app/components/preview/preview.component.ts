import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  // trackLength: number = 1;
  brakeSpeed: number = 1;
  brakeTorque: number = 0;
  acceleration: number = 0.5;
  minAcceleration: number = 0.5;
  state: any = {
    started: false,
    paused: -1,
    ended: false,
  }
  constructor(private wsService: WebsocketService) { }

  ngOnInit(): void {
    this.wsService.stateUpdate.subscribe(state => {
      if (state){
        // this.state = state;
      }
    })
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
  }
}
