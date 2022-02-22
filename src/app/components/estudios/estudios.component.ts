import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios =[
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
]
  
  constructor() { }

  ngOnInit(): void {
  }

}
