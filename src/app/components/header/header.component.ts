import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosService } from 'src/app/servicios/datos.service';
import { EditService } from 'src/app/servicios/edit.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginToggle:boolean=false;
  header:any;
  @Output() onLoginClick:EventEmitter<boolean> = new EventEmitter();
 
  constructor(
    private datosHeader:DatosService,
    private editService:EditService
  
    ) { }

  ngOnInit(): void {
    this.datosHeader.getDatos().subscribe(data =>{
      this.header = data[0];
    });
    
    
  }
  onLogin(){
    this.editService.valorIcon = true;
  }
  onDouble(){
    this.editService.valorIcon = false;
  }

}
