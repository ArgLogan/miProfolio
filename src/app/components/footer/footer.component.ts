import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { Persona } from '../../interfaces';
import {PERSONA} from '../../mok'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer:Persona = PERSONA;
  constructor( private datosFooter:DatosService,) { }

  ngOnInit(): void {
    this.datosFooter.getDatos(0).subscribe(data =>{ // El Cero identifica a la secion ABOUT
      this.footer = data[0];
    });
  }

}
