import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { EditService } from 'src/app/servicios/edit.service';
import { Proyecto } from 'src/app/interfaces';
import {PROYECTO} from '../../mok';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  cards:Proyecto[]=[];
  nuevo:Proyecto=PROYECTO;
  toggleModal:boolean = false;
  constructor(
    private datosProyect:DatosService,
    public editService:EditService
  ) { }

  ngOnInit(): void {
    this.datosProyect.getDatos(6).subscribe(data =>{
      this.cards = data;
    });
  }

  onNew(){
    this.toggleModal = !this.toggleModal;
    
  }
  onAdd(dato:Proyecto){
    this.datosProyect.addSDatos(dato, 6).subscribe(data =>{
      this.ngOnInit();
    })
    alert("Se agregó un nuevo Proyecto");
  }
  deleteproyect(dato:Proyecto){
    if(confirm("¿está seguro de quere borrar el proyecto?")){

      this.datosProyect.deleteDatos(dato,6)
      .subscribe( 
        ()=>{
          this.cards = this.cards.filter( (t) => {
            return t.id !== dato.id
          })
        })
    }

  }
  
}
