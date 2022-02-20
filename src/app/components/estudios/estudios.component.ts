import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios =[
    {
      institucion:"Manuel Dorrego - Moron",
      periodo:"1983-1989",
      titulo:"primaario",
      completo: true,
      descripcion:"Estudios primarios nivel nacional"
    },
  {
    institucion:"EDET Nro2 Republica del Perú - Hurlingham",
    periodo:"1990-1995",
    titulo:"Técnico en Electronica",
    completo: true,
    descripcion:"Escuala de enseñansa tecnica"
  },
  {
    institucion:"Universidad de Buenos Aires",
    periodo:"2010-2022",
    titulo:"Editor",
    completo: false,
    descripcion:"Educación Superior universitaria"
  },
  {
    institucion:"Argentina Programa",
    periodo:"2021-2022",
    titulo:"Programador web Full Stack",
    completo: false,
    descripcion:"curso certificado por el ministerio dedesarrollo porductivo de la Nación"
  }
]
  
  constructor() { }

  ngOnInit(): void {
  }

}
