import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-item-barra',
  templateUrl: './item-barra.component.html',
  styleUrls: ['./item-barra.component.css']
})
export class ItemBarraComponent implements OnInit {
  datos = {
    nombre: "html",
    percent: "70",
    color: "red"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
