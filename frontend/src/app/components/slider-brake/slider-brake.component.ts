import { Component, OnInit } from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-slider-brake',
  templateUrl: './slider-brake.component.html',
  styleUrls: ['./slider-brake.component.scss']
})
export class SliderBrakeComponent implements OnInit {
  sliderValue: number = 0;
  pedalModeVal: boolean = false;


  constructor(private wsService: WebsocketService) { }

  ngOnInit(): void {
   
  }

  slider(event): void{
    this.sliderValue = parseInt(event.target.value);
    this.wsService.control({type: 'sliderBrake', params: this.sliderValue})
    
    
  }

  newFunc(event): void{
    if(this.pedalModeVal){
      console.log(event.target.value)
      let i: number = event.target.value;
      while(i>-1){
        event.target.value = i
        this.sliderValue = parseInt(event.target.value);
        this.wsService.control({type: 'sliderBrake', params: this.sliderValue})
        i=i-1
      }
       
    }

  }

  pedalFunc(event): void{
    this.pedalModeVal = event.target.checked;
  }



}
