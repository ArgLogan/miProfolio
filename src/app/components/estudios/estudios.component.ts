import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import {Study}from '../../interfaces'

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios:Study[]=[];

  
  constructor(private datosEstudio:DatosService) { }

  ngOnInit(): void {
    this.datosEstudio.getDatosStudy().subscribe(data =>{
      this.estudios = data;
      console.log(this.estudios);
    });
  }
  deleteStudy(estudio:Study){
    this.datosEstudio.deleteStudy(estudio)
    .subscribe( 
      ()=>{
      this.estudios = this.estudios.filter( (t) => {
        return t.id !== estudio.id
      })
    })
  }
  editStudy(estudio:Study){
    console.log(estudio)
  }

}
