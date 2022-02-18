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
      titulo :"HTML",
      subtitulo :"70%",
      color : "#4882c2"
    },
    {
      porcentje :  60,
      titulo :"CSS",
      subtitulo :"60%",
      color : "#5023c2"
    },
    {
      porcentje :  50,
      titulo :"JAVA",
      subtitulo :"50%",
      color : "#c923c2"
    },
    {
      porcentje :  30,
      titulo :"JS",
      subtitulo :"30%",
      color : "#8892c2"
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
