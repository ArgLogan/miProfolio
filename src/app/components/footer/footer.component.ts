import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public footer:any;
  constructor( private datosFooter:DatosService,) { }

  ngOnInit(): void {
    this.datosFooter.getDatos(0).subscribe(data =>{ // El Cero identifica a la secion ABOUT
      console.log(data);
      this.footer = data[0];
    });
  }

}
