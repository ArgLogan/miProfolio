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
  editIcon:boolean =true;
  nuevo:Study=STUDY;

  
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
  onAdd(estudio:Study){
    
      this.datosEstudio.addStudy(estudio).subscribe((estudio) =>{
        this.estudios.push(estudio)
      })

  }
  saveEdit(estudio:Study){
    this.datosEstudio.saveEditStudy(estudio).subscribe((estudio) =>{
      /*this.estudios = this.estudios.filter( (t) => {
        return t.id !== estudio.id
      })*/
      this.estudios.push(estudio)
      

    })
  }

}
