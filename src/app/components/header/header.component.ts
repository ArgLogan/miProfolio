import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { DatosService } from 'src/app/servicios/datos.service';
import { EditService } from 'src/app/servicios/edit.service';
import {Header, User} from '../../interfaces'
import {HEADER, USER} from '../../mok'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login:boolean=false;
  logout:boolean = false;
  flag:boolean = false;
  token:string = "";

  password:string ="pasword";
  username:string="user name";
  user:User = USER;
  users:any;
  header:Header = HEADER;
  @Output() onLoginClick:EventEmitter<boolean> = new EventEmitter();
 
  constructor(
    private datosHeader:DatosService,
    private editService:EditService
  
    ) { }

  ngOnInit(): void {
    this.datosHeader.getDatos(1).subscribe(data =>{ // 1 es el valor que identifica la sección Header - ver DatosService
      this.header = data[0];
    });
    this.datosHeader.getDatos(7).subscribe(data =>{ // 7 es el valor que identifica la sección Users - ver DatosService
      this.users = data;
    });
     
    
    
  }
  onLogin(){
    
    
    this.user.password = this.password
    this.user.usuario = this.username

    this.datosHeader.verify(this.user).subscribe(data =>{ 
      this.token = data;
      console.log(this.token + "  "+ data)
      if (this.token != null){
        this.flag = true;
      }
      
      if(this.flag ){
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

    });
   
    
  }
  onDouble(){
    this.editService.valorIcon = false;
    this.logout = false;
    this.login =true;
  }
  showLogin(){
    this.login = !this.login;
  }
}
