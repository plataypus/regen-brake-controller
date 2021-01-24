import { Component, OnInit } from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private wsService: WebsocketService) { }

  ngOnInit(): void {
    
  }

  onBrake(){
    this.wsService.brake(1)
  }
}
