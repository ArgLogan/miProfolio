import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ItemBarraComponent } from './components/item-barra/item-barra.component';
import { ProgressComponent } from './components/progress/progress.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ItemBarraComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      "backgroundGradient": true,
      "backgroundColor": "#ffffff",
      "backgroundGradientStopColor": "#c0c0c0",
      "backgroundPadding": -5,
      "radius": 60,
      "space": 11,
      "maxPercent": 100,
      "unitsFontSize": "25",
      "unitsFontWeight": "600",
      "outerStrokeWidth": 13,
      "outerStrokeColor": "#61A9DC",
      "outerStrokeLinecap": "square",
      "innerStrokeWidth": 18,
      "titleFontSize": "27",
      "titleFontWeight": "600",
      "subtitleColor": "#444444",
      "subtitleFontSize": "12",
      "subtitleFontWeight": "600",
      "imageHeight": 127,
      "imageWidth": 145,
      "showInnerStroke": false,
      "clockwise": false,
      "startFromZero": false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
