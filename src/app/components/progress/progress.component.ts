import { Component, OnInit, Input } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  @Input() datos:any;
  /*porcentje = this.datos.porcentje;
  titulo = this.datos.titulo;
  subtitulo =this.datos.subtitulo;
  color = this.datos.color;*/

  constructor() { }

  ngOnInit(): void {
    console.log(this.datos);
  }

}
