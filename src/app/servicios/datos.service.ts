import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import {Observable} from 'rxjs'
import{ Study, Skills, Experience} from '../interfaces' 

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  apiUrlPorfolio:string =' http://localhost:5000/porfolio';
  apiUrlSkills:string = ' http://localhost:5000/skills';
  apiUrlStudy:string = ' http://localhost:5000/estudios';
  apiUrlExp:string = ' http://localhost:5000/experiencias';
  jsonUrl:string =' db.json/porfolio';

  constructor( private http:HttpClient ) { }

  getDatosPorfolio():Observable<any>{
    return  this.http.get(this.apiUrlPorfolio);
    //return  this.http.get(this.jsonUrl);
  }

  getDatosStudy():Observable<any>{
    return  this.http.get(this.apiUrlStudy);
  }

  getDatosExp():Observable<any>{
    return  this.http.get(this.apiUrlExp);
  }
  
  getDatosSkills():Observable<any>{
    return  this.http.get(this.apiUrlSkills);
  }


  deleteStudy(estudio:Study):Observable<Study>{
    //console.log(estudio)
    const url = `${this.apiUrlExp}/${estudio.id}`
    return this.http.delete<Study>(url)
  }
  deleteExp(experiencia:Experience):Observable<Experience>{
    console.log(experiencia)
    const url = `${this.apiUrlStudy}/${experiencia.id}`
    return this.http.delete<Experience>(url)
  }
 


}