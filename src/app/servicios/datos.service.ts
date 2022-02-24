import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  apiUrl =' http://localhost:5000/porfolio';
  jsonUrl='db.json';

  constructor( private http:HttpClient ) { }

  getDatos():Observable<any>{
    return  this.http.get(this.apiUrl);
    //return  this.http.get(this.jsonUrl);
  }
}