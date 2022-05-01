import { Component, OnInit, Input, Output } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { EditService } from 'src/app/servicios/edit.service';
import {Persona} from '../../interfaces'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   
  @Input() editIcon:boolean=true;
  about:any;
  toggleModal:boolean = false
  toggleFotoPefil:boolean = false;
  newPerfil:string ="";


  constructor(
    private datosAbout:DatosService,
    public editService:EditService
  ) { }

  ngOnInit(): void {
    this.datosAbout.getDatosPorfolio().subscribe(data =>{
      console.log(data);
      this.about = data[0];
    });
  }
  onFotoPerfil(){
    this.toggleModal = !this.toggleModal;
    this.toggleFotoPefil = !this.toggleFotoPefil;
  }
  onFotoBanner(){
    this.toggleModal = !this.toggleModal;
    
  }

  onNombre(){
    
  }
  onAbout(){

  }
  onPerfil(){
    
    this.onFotoPerfil()
    this.about.fperfil= this.newPerfil;
    console.log(this.about)
    this.datosAbout.atualizaFotoPerfil(this.about).subscribe((persona)=>{
      
    });

  }

}
