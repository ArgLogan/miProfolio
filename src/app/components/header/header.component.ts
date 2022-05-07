import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { DatosService } from 'src/app/servicios/datos.service';
import { EditService } from 'src/app/servicios/edit.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login:boolean=true;
  logout:boolean = false;

  password:string ="pasword";
  username:string="user name";
 
  
  header:any;
  @Output() onLoginClick:EventEmitter<boolean> = new EventEmitter();
 
  constructor(
    private datosHeader:DatosService,
    private editService:EditService
  
    ) { }

  ngOnInit(): void {
    this.datosHeader.getDatos(1).subscribe(data =>{ // 1 es el valor que identifica la sección Header - ver DatosService
      this.header = data[0];
    });
    
    
  }
  onLogin(){
    console.log(this.username + " " + this.password);

    if((this.password == "admin" )&& (this.username == "admin" )){
      this.editService.valorIcon = true;
      this.logout = true;
      this.login = false;
      this.username ="";
      this.password ="";
    }else{
      this.username ="";
      this.password ="";
     alert("Password o usuario incorrecto")
    }
    
  }
  onDouble(){
    this.editService.valorIcon = false;
    this.logout = false;
    this.login =true;
  }

  usuario(valor:any){
    console.log(valor)
    this.username  = valor;
  }

}
