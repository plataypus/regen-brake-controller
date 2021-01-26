import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegenControlComponent } from './regen-control.component';

describe('RegenControlComponent', () => {
  let component: RegenControlComponent;
  let fixture: ComponentFixture<RegenControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegenControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegenControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
