import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {
  editIconyo:boolean = true;
 
  @Input() estudio:any;
  constructor() { }

  ngOnInit(): void {
    
  }
  onToggle(){
    this.editIconyo =  !this.editIconyo;
    alert("click"+this.editIconyo);
  }
}
