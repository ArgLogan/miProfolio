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
  
  constructor(public editService:EditService) { }

  ngOnInit(): void {
    
  }
  onDelete(study:Study){
    console.log(study);
    this.onDeleteStudy.emit(study)
  }

}
