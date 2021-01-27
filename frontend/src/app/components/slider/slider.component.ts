import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() isDisabled: boolean = false;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() unit: string = '';
  sliderValue: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.sliderValue = this.min
  }

  slide(event): void {
    this.sliderValue = event.target.value;
  }
}
