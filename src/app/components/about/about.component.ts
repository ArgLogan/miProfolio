import { Component, OnInit, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   //@Input() editIcon:boolean = loginToggle;
   editIcon:boolean=true;

  about ={
    banner:"../assets/imgs/Banner.jpg",
    fPerfil:"../assets/imgs/banner2.png",
    titulo:"Programador web Full Stack Jr",
    nombre:"Juan José Roma",
    texto:"Acá va este texto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam mollitia, culpa error animi illum suscipit ea molestiae. Accusamus, vero rem asperiores pariatur deserunt in voluptatum."
  }
  constructor() { }

  ngOnInit(): void {
  
  }

}
