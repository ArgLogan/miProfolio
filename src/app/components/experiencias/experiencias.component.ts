import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { Experience } from 'src/app/interfaces';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experiencias:Experience[]=[];
  
  /*experiencias =[
    {
      periodo:"2005-2022",
      nombre:"Controles Electronicos Fermi",
      puesto:"Tecnico en electronica",
      tareas:"Desarrollo de softwar y hardware. Armado, reparación y calibración del equipos (PLC -CONTROL DE TEMPERATURA)",
      tipo:"Relación de dependencia"
    }
  ]*/
  constructor( private datosExp:DatosService) { }

  ngOnInit(): void {
    this.datosExp.getDatosExp().subscribe(data =>{
      this.experiencias = data;
    })
  }

}
