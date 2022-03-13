import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';
import { EditService } from 'src/app/servicios/edit.service';
import {Experience} from '../../interfaces'
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
  
  constructor(public editService:EditService) { }


  ngOnInit(): void {
  }
  onDelete(experiencia:Experience){
    console.log(experiencia);
    this.onDeleteExp.emit(experiencia)
  }
  onEdit(){
    this.editFlag = !this.editFlag
  }
  onSaveEdit(editado:Experience){
    this.onSaveEditExp.emit(editado)
    this.editFlag = !this.editFlag
  }

}
