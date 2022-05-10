import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import {EditService} from 'src/app/servicios/edit.service';
import {Skills} from '../../interfaces'
import {SKILL} from '../../mok'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  barras:Skills[]=[];
  nuevo:Skills = SKILL;
  toggleModal:boolean = false;

  constructor(
    private datosProgress:DatosService,
    public editService:EditService
  ) { }

  ngOnInit(): void {
    this.datosProgress.getDatos(2).subscribe(data =>{// 2 es el valor que identifica la sección Skills - ver DatosService
      this.barras = data;
      console.log(data)
    });

  }
  onNew(){
    this.toggleModal = !this.toggleModal;
  }
  onAdd(dato:Skills){
    this.datosProgress.addSDatos(dato, 2).subscribe(data =>{
      this.ngOnInit();
    })
    alert("Se agregó una nueva habilidad")
  }
  deleteSkill(dato:Skills){
    if(confirm("¿Etsá seguro que quiere borrar la habilidad?")){
      this.datosProgress.deleteDatos(dato, 2).subscribe(data =>{
        this.ngOnInit();
      })
    }
  }
  onEdit(dato:Skills){
    this.datosProgress.atualizaDatos(dato, 2).subscribe(data =>{
      this.ngOnInit();
    })
  }

}
