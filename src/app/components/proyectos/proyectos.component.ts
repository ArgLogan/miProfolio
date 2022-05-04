import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { EditService } from 'src/app/servicios/edit.service';
import { Proyecto } from 'src/app/interfaces';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  cards:Proyecto[]=[];

  constructor(
    private datosProyect:DatosService,
    public editService:EditService
  ) { }

  ngOnInit(): void {
    this.datosProyect.getDatos(6).subscribe(data =>{
      this.cards = data;
      console.log(data)
    });
  }

}
