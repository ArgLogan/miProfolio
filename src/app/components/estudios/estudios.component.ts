import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { EditService } from 'src/app/servicios/edit.service';
import {Study} from '../../interfaces'
import {STUDY} from '../../mok'

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios:Study[]=[];
  toggleModal:boolean =false;
  nuevo:Study=STUDY;


  
  constructor(
    private datosEstudio:DatosService,
    public editService:EditService
  
    ) { }

  ngOnInit(): void {
    this.datosEstudio.getDatos(3).subscribe(data =>{// 3 es el valor que identifica la sección Estudios - ver DatosService
      this.estudios = data;
    });

  }
  deleteStudy(estudio:Study){
    if(confirm("¿está seguro de quere borrar el estudio?")){

      this.datosEstudio.deleteDatos(estudio,3)
      .subscribe( 
        ()=>{
          this.estudios = this.estudios.filter( (t) => {
            return t.id !== estudio.id
          })
        })
    }
  }
  editStudy(estudio:Study){
  }
  onAdd(estudio:Study){

      this.datosEstudio.addSDatos(estudio,3).subscribe((estudio) =>{
        this.estudios.push(estudio)
        this.ngOnInit();
      })
      alert("Se Agrego un nuevo estudio");
      this.nuevo = STUDY;

  }
  onEdit(){
    this.toggleModal = !this.toggleModal;
  }
  saveEdit(estudio:Study){
    this.datosEstudio.atualizaDatos(estudio,3).subscribe((estudio) =>{
      this.ngOnInit();
    })

  }

}
