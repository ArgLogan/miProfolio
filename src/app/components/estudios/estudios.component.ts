import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios:any;
  /*estudios =[
  {
    institucion:"Argentina Programa",
    periodo:"2021-2022",
    titulo:"Programador web Full Stack",
    completo: false,
    descripcion:"curso certificado por el ministerio dedesarrollo porductivo de la Nación"
  },
  {
    institucion:"Universidad de Buenos Aires",
    periodo:"2010-2022",
    titulo:"Editor",
    completo: false,
    descripcion:"Carrera de Grado nivel Universitrios"
  },
  ]*/
  
  constructor(private datosEstudio:DatosService) { }

  ngOnInit(): void {
    this.datosEstudio.getDatos().subscribe(data =>{
      console.log(data);
      this.estudios = data[2];
    });
  }

}
