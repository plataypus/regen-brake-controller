import { Component, OnInit } from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-slider-brake',
  templateUrl: './slider-brake.component.html',
  styleUrls: ['./slider-brake.component.scss']
})
export class SliderBrakeComponent implements OnInit {
  sliderValue: number = 0;

  constructor(private wsService: WebsocketService) { }

  ngOnInit(): void {
   
  }

  slider(event): void{
    this.sliderValue = parseInt(event.target.value);
    this.wsService.control({type: 'sliderBrake', params: this.sliderValue})
  }



}
