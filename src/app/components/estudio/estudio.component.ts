import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {
  editIcon:boolean = true;
 
  @Input() estudio:any;
  constructor() { }

  ngOnInit(): void {

  }

}
