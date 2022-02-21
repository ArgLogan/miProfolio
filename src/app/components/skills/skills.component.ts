import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  barras =[
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

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
