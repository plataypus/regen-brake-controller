import { Component, OnInit } from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-slider-brake',
  templateUrl: './slider-brake.component.html',
  styleUrls: ['./slider-brake.component.scss']
})
export class SliderBrakeComponent implements OnInit {

  constructor(private wsService: WebsocketService) { }

  ngOnInit(): void {
   
  }

  sliderValue(){
    //Taking in value of slider
    var brakeValue = (<HTMLInputElement>document.getElementById("brakePercent")).value;
    
    //Showing the slider value on the page
    (document.getElementById("brakeValue")).innerHTML = brakeValue;

    this.wsService.control({type: 'sliderBrake', force: brakeValue})
  }



}
