import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  @Input() editIcon:boolean =true;
  constructor() { }

  ngOnInit(): void {
  }
  onEdit(){
    alert("ESTE EDITA");
  }
  onDelete(){
    alert("ESTE BORRA");
  }

}
