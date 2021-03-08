import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  // trackLength: number = 1;
  brakeSpeed: number = 1;
  brakeTorque: number = 0;
  acceleration: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  onStart(): void {
    console.log(this.brakeTorque, this.brakeSpeed, this.acceleration)

  }
  onPause(): void {
    console.log(this.brakeTorque, this.brakeSpeed)
  }

  onReset(): void {
    console.log(this.brakeTorque, this.brakeSpeed)
  }
}
