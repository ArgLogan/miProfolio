import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  barras:any;
  /*barras =[
    {
      porcentje :  70,
      titulo :"../assets/imgs/html.svg",
      subtitulo :"70%",
      color : "#4882c2"
    },
    {
      porcentje :  60,
      titulo :"../assets/imgs/css3.svg",
      subtitulo :"60%",
      color : "#5023c2"
    },
    {
      porcentje :  50,
      titulo :"../assets/imgs/java.svg",
      subtitulo :"50%",
      color : "#c923c2"
    },
    {
      porcentje :  30,
      titulo :"../assets/imgs/js.svg",
      subtitulo :"30%",
      color : "#8892c2"
    },
    {
      porcentje :  60,
      titulo :"../assets/imgs/angular.svg",
      subtitulo :"30%",
      color : "#0000ff"
    }

  ]*/
  constructor(private datosProgress:DatosService) { }

  ngOnInit(): void {
    this.datosProgress.getDatos().subscribe(data =>{
      console.log(data);
      this.barras = data[4];
    });

  }

}
