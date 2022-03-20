import { Component, OnInit, Input, Output } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { EditService } from 'src/app/servicios/edit.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   
  @Input() editIcon:boolean=true;
  about:any;
  toggleFotos:boolean = false;
  newDireccion:string ="";


  constructor(
    private datosAbout:DatosService,
    public editService:EditService
  ) { }

  ngOnInit(): void {
    this.datosAbout.getDatosPorfolio().subscribe(data =>{
      //console.log(data);
      this.about = data[1];
    });
  }
  onFotos(){
    this.toggleFotos = !this.toggleFotos;
    console.log("entra"+this.toggleFotos)
  }
  onNombre(){
    
  }
  onAbout(){

  }
  onCambia(){
    console.log(this.newDireccion);
  }

}
