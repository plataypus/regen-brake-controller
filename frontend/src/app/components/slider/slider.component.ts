import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() sliderEvent: EventEmitter<number> = new EventEmitter<number>();
  sliderValue: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.updateSlider(this.min)
  }

  slide(event): void {
    this.updateSlider(parseInt(event.target.value));
  }

  updateSlider(value: number): void{
    this.sliderValue = value
    this.sliderEvent.emit(value)
  }
}
