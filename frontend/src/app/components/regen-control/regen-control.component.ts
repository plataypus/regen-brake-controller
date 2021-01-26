import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regen-control',
  templateUrl: './regen-control.component.html',
  styleUrls: ['./regen-control.component.scss']
})
export class RegenControlComponent implements OnInit {
  controlTypes: string[] = ['real-time', 'manual'];
  selectedControlType: string = this.controlTypes[0];
  constructor() { }

  ngOnInit(): void {
  }

  selectUpdate (event: any): void {
    this.selectedControlType = event.target.value;
  }

}
