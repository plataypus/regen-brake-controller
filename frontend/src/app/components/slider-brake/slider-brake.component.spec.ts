import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBrakeComponent } from './slider-brake.component';

describe('SliderBrakeComponent', () => {
  let component: SliderBrakeComponent;
  let fixture: ComponentFixture<SliderBrakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderBrakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderBrakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
