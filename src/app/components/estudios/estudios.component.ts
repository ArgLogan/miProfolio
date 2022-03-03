import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { EditService } from 'src/app/servicios/edit.service';
import {Study}from '../../interfaces'

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios:Study[]=[];
  editIcon:boolean =true;

  
  constructor(
    private datosEstudio:DatosService,
    public editService:EditService
  
    ) { }

  ngOnInit(): void {
    this.datosEstudio.getDatosStudy().subscribe(data =>{
      this.estudios = data;
      console.log(this.estudios);
    });
    this.editIcon = this.editService.valorIcon;

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
  onEdit(){
    console.log()
  }

}
