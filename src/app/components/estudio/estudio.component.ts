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
    this.onDeleteStudy.emit(study)
  }
<<<<<<< HEAD
  onEdit(study:Study){
    const habilita:boolean=true;
    this.estudio = study 
=======
  onEdit(){
    this.editFlag = !this.editFlag
  }
  onSaveEdit(editado:Study){
    this.onSaveEditStudy.emit(editado)
    this.editFlag = !this.editFlag
>>>>>>> 3e1739d3eec8cd168966e1cc0ecd95a38607521a
  }

}
