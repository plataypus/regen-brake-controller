import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderBrakeComponent } from './components/slider-brake/slider-brake.component';
import { RegenControlComponent } from './components/regen-control/regen-control.component';
import { ManualControlComponent } from './components/manual-control/manual-control.component';
import { PreviewComponent } from './components/preview/preview.component';
import { GraphComponent } from './components/graph/graph.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SliderBrakeComponent,
    RegenControlComponent,
    ManualControlComponent,
    PreviewComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
