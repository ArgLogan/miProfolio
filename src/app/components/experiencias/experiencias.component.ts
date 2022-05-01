import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { EditService } from 'src/app/servicios/edit.service';
import { Experience } from 'src/app/interfaces';
import {EXPERIENCIA} from '../../mok'

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experiencias:Experience[]=[];
  editIcon:boolean =true;
  nuevo:Experience = EXPERIENCIA;

  constructor( 
    private datosExp:DatosService,
    public editService:EditService
  
  ) { }

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
  onAdd(exp:Experience){
    
    this.datosExp.addExp(exp).subscribe((experi) =>{
      this.experiencias.push(exp)
      this.ngOnInit();
    })

}
saveEdit(exp:Experience){
  this.datosExp.saveEditExp(exp).subscribe((experi) =>{
  })

}


}
