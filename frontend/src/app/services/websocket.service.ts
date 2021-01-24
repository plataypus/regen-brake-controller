import { Injectable } from '@angular/core';
// import {webSocket, WebSocketSubject} from 'rxjs/webSocket'
import {BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  websocket: WebSocket;
  private data: any = {}
  private dataSub = new BehaviorSubject<any>(this.data);
  public serverMessage = this.dataSub.asObservable() //call this to receive message from server

  constructor() { }

  public connect(){
    this.websocket = new WebSocket('ws://localhost:8080');

    this.websocket.onopen = event => {
      this.websocket.send(JSON.stringify({eventType: 'connection', data: {clientType: 'dashboard'}}));
      console.log('websocket connected')
    }

    this.websocket.onmessage = event => {
      const {eventType, data} = JSON.parse(event.data)
      switch (eventType){
        case 'init':
          this.websocket.send(JSON.stringify({eventType: 'message', data:'hello'}))
      }
    }

    this.websocket.onclose = event => {
      console.log('disconnected')
    }

  }

  public brake(brakeforce){
    this.websocket.send(JSON.stringify({eventType: "brake", data: {brakeforce}}))
  }
}
