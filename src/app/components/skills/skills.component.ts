import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import {EditService} from 'src/app/servicios/edit.service';
import {Skills} from '../../interfaces'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  barras:Skills[]=[];

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

}
