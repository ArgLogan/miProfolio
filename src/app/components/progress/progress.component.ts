import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditService } from 'src/app/servicios/edit.service';
import {Skills} from '../../interfaces'
import {SKILL} from '../../mok'


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  @Input() datos:any;
  @Output() onDeleteProgress:EventEmitter<Skills> = new EventEmitter();
  @Output() onSave:EventEmitter<Skills> = new EventEmitter();
  editFlag:boolean = false;
  nuevo:Skills =SKILL;
  editando:Skills =SKILL;
 

  constructor(public editService:EditService) { }

  ngOnInit(): void {
    
  }

  onEdit(){
    this.editando.color = this.datos.color
    this.editando.id = this.datos.id
    this.editando.porcentaje =  this.datos.porcentaje
    this.editando.subtitulo =  this.datos.subtitulo
    this.editando.titulo =  this.datos.titulo


    this.editFlag = !this.editFlag
  }
  onSaveEdit(editado:Skills){
    if (editado.porcentaje < 0){editado.porcentaje =  0}
    if (editado.titulo == ""){
      editado.titulo = "./assets/imgs/alert.png"
    }
    
    this.onSave.emit(editado)
    this.editFlag = !this.editFlag
  }
  onDelete(progress:Skills){
    console.log(progress);
    this.onDeleteProgress.emit(progress)
    this.editFlag = !this.editFlag
  }



}

