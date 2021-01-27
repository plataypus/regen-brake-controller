import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-control',
  templateUrl: './manual-control.component.html',
  styleUrls: ['./manual-control.component.scss']
})
export class ManualControlComponent implements OnInit {
  isRamp: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  rampToggle(event): void {
    this.isRamp = !this.isRamp
  }
}
