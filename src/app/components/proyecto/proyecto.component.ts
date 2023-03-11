import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { from } from 'rxjs';
import {Proyecto} from '../../interfaces'
import {PROYECTO} from '../../mok'

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  @Input() datos:any ;
  @Output() onDeleteProyect:EventEmitter<Proyecto> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(proyect:Proyecto){
    this.onDeleteProyect.emit(proyect)
  }

}
