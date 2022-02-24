import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginToggle:boolean=false;
  header:any;
  /*header = {
    nombre:"Juan José",
    apLogo:"../assets/imgs/aplogo.png",
    apText:"#YoProgramo",
    lidin:"https://www.linkedin.com/in/juan-jos%C3%A9-roma-11310a36?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2PrY1wymR9%2Bb4RcARsnrZw%3D%3D",
    github:"https://github.com/ArgLogan",
    twitter:"https://twitter.com/Arglogan",
    facebook:"#"
  };*/
  constructor(private datosHeader:DatosService) { }

  ngOnInit(): void {
    this.datosHeader.getDatos().subscribe(data =>{
      //console.log(data);
      this.header = data[0];
    });
    
    
  }
  onLogin(){
   
  }

}
