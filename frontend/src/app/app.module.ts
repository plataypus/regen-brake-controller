import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderBrakeComponent } from './components/slider-brake/slider-brake.component';
import { RegenControlComponent } from './components/regen-control/regen-control.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SliderBrakeComponent,
    RegenControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
