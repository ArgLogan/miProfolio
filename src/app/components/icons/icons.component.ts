import { Component, OnInit, Input} from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  editIcon:boolean =true;
  constructor() { }

  ngOnInit(): void {
  }
  onEdit(){
    alert("ESTE EDITA");
  }
  onDelete(){
    alert("ESTE BORRA");
  }
  onToggleEdit(valor:boolean){
    this.editIcon = valor;
  }

}
