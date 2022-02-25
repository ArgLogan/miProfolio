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
  @Output() onLoginClick:EventEmitter<boolean> = new EventEmitter();
 
  constructor(private datosHeader:DatosService) { }

  ngOnInit(): void {
    this.datosHeader.getDatos().subscribe(data =>{
      //console.log(data);
      this.header = data[0];
    });
    
    
  }
  onLogin(loginToggle:boolean){
    this.loginToggle = !this.loginToggle;
    this.onLoginClick.emit(this.loginToggle);
  }

}
