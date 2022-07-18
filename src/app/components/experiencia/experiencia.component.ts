import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';
import { EditService } from 'src/app/servicios/edit.service';
import {Experience} from '../../interfaces'
import {EXPERIENCIA} from '../../mok'

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  @Input() experiencia:any;
  @Output() onDeleteExp:EventEmitter<Experience> = new EventEmitter();
  @Output() onSaveEditExp:EventEmitter<Experience> = new EventEmitter();
  editFlag:boolean= false
  editado:Experience =  EXPERIENCIA;
  
  constructor(public editService:EditService) { }


  ngOnInit(): void {
  }
  onDelete(experiencia:Experience){
    this.onDeleteExp.emit(experiencia)
  }
  onEdit(){
    this.editado.actual = this.experiencia.actual
    this.editado.id = this.experiencia.id
    this.editado.nombre = this.experiencia.nombre
    this.editado.periodo = this.experiencia.periodo
    this.editado.puesto = this.experiencia.puesto
    this.editado.tareas = this.experiencia.tareas
    this.editado.tipo = this.experiencia.tipo

    this.editFlag = !this.editFlag
  }
  onSaveEdit(editado:Experience){
    this.onSaveEditExp.emit(editado)
    this.editFlag = !this.editFlag
  }

}
