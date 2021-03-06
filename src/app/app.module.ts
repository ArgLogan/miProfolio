import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProgressComponent } from './components/progress/progress.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { IconsComponent } from './components/icons/icons.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ProgressComponent,
    EstudiosComponent,
    EstudioComponent,
    ExperienciasComponent,
    ExperienciaComponent,
    IconsComponent,
    ProyectosComponent,
    ProyectoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "backgroundGradient": true,
      "backgroundColor": "#ffffff",
      "backgroundGradientStopColor": "#c0c0c0",
      "backgroundPadding": -5,
      "radius": 60,
      "space": -10,
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
      "startFromZero": false,
      "animation":true,
      "showUnits":false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
