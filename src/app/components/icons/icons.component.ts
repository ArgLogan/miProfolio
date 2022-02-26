import { Component, OnInit, Input} from '@angular/core';
import { EditService } from 'src/app/servicios/edit.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  editIcon:boolean =true;
  constructor( public editService:EditService) { }

  ngOnInit(): void {
    this.editIcon = this.editService.valorIcon;
  }
  onEdit(){
    alert("ESTE EDITA");
  }
  onDelete(){
    alert("ESTE BORRA");
  }

  onToggle(){
    this.editIcon = this.editService.valorIcon;
  }

}
