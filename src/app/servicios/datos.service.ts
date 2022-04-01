import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable} from '@angular/core';
import {Observable} from 'rxjs'
import{ Study, Skills, Experience} from '../interfaces' 

const httpOptions ={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
  
}

@Injectable({
  providedIn: 'root'
})
export class DatosService {
 
  /*apiUrlPorfolio:string = 'https://my-json-server.typicode.com/ArgLogan/mokEndPoint/porfolio';
  apiUrlSkills:string = 'https://my-json-server.typicode.com/ArgLogan/mokEndPoint/skills';
  apiUrlStudy:string = 'https://my-json-server.typicode.com/ArgLogan/mokEndPoint/estudios';
  apiUrlExp:string = 'https://my-json-server.typicode.com/ArgLogan/mokEndPoint/experiencias';*/
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

  //ESTUDIOS

  getDatosStudy():Observable<any>{
    return  this.http.get(this.apiUrlStudy);
  }
  deleteStudy(estudio:Study):Observable<Study>{
    //console.log(estudio)
    const url = `${this.apiUrlStudy}/${estudio.id}`
    return this.http.delete<Study>(url)
  }
  addStudy(estudio:Study):Observable<any>{
    return this.http.post<any>(this.apiUrlStudy, estudio, httpOptions)
  }

  //Skills

  getDatosSkills():Observable<any>{
    return  this.http.get(this.apiUrlSkills);
  }

//EXPERIENCIAS

  getDatosExp():Observable<any>{
    return  this.http.get(this.apiUrlExp);
  }
  
  deleteExp(experiencia:Experience):Observable<Experience>{
    console.log(experiencia)
    const url = `${this.apiUrlExp}/${experiencia.id}`
    return this.http.delete<Experience>(url)
  }
  
 

  saveEditStudy(estudio:Study):Observable<Study>{
    const url = `${this.apiUrlStudy}/${estudio.id}`
    return this.http.put<Study>(url, estudio, httpOptions)
  }


}