import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experiencias =[
    {
      periodo:"2005-2022",
      nombre:"Controles Electronicos Fermi",
      puesto:"Tecnico en electronica",
      tareas:"Desarrollo de softwar y hardware. Armado, reparación y calibración del equipos (PLC -CONTROL DE TEMPERATURA)",
      tipo:"Relación de dependencia"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
