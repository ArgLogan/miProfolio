import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { EditService } from 'src/app/servicios/edit.service';
import {Study} from '../../interfaces'

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {
  @Input() estudio:any;
  @Output() onDeleteStudy:EventEmitter<Study> = new EventEmitter();
  @Output() onSaveEditStudy:EventEmitter<Study> = new EventEmitter();
  editFlag:boolean = false
  toggleModal:boolean= false
 
  
  constructor(public editService:EditService) { }

  ngOnInit(): void {
    
  }
  onDelete(study:Study){
    //console.log(study);
    this.onDeleteStudy.emit(study)
  }
  onEdit(){
    this.editFlag = !this.editFlag
  }
  onSaveEdit(editado:Study){
    this.onSaveEditStudy.emit(editado)
    this.editFlag = !this.editFlag
  }

}
