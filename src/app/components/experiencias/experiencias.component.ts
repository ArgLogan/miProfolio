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

  constructor( private datosExp:DatosService) { }

  ngOnInit(): void {
    this.datosExp.getDatosExp().subscribe(data =>{
      this.experiencias = data;
    })
  }
  deleteExp(experiencia:Experience){
    this.datosExp.deleteExp(experiencia)
    .subscribe( 
      ()=>{
      this.experiencias = this.experiencias.filter( (t) => {
        return t.id !== experiencia.id
      })
    })
  }



}
