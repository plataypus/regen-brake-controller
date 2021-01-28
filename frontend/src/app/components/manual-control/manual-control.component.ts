import { Component, OnInit } from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';
 
@Component({
  selector: 'app-manual-control',
  templateUrl: './manual-control.component.html',
  styleUrls: ['./manual-control.component.scss']
})
export class ManualControlComponent implements OnInit {
  isRamp: boolean = false;
  torque: number = 0;
  time: number = 1;

  constructor(private wsService: WebsocketService) { }

  ngOnInit(): void {
  }

  rampToggle(event): void {
    this.isRamp = !this.isRamp
  }

  onBrake(): void {
    this.wsService.control({type: 'brake', params: {isRamp: this.isRamp, torque: this.torque, time: this.time}});
  }

  torqeUpdate(value: number): void{
    this.torque = value;
    console.log(this.torque)
  }
  timeUpdate(value: number): void{
    this.time = value;
    console.log(this.time)
  }
}
