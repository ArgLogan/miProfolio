import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable} from '@angular/core';
import {Observable} from 'rxjs'
import{ Study, Skills, Experience} from '../interfaces' 
import {STUDY} from '../mok'


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
  //apiUrlSkills:string = ' http://localhost:5000/skills';
  apiUrlSkills:string = ' http://localhost:8080/skill';
  //apiUrlStudy:string = ' http://localhost:5000/estudios';
  apiUrlStudy:string = ' http://localhost:8080/study';
  apiUrlExp:string = ' http://localhost:5000/experiencias';
  jsonUrl:string =' db.json/porfolio';

  constructor( private http:HttpClient ) { }

  getDatosPorfolio():Observable<any>{
    console.log(this.http.get(this.apiUrlPorfolio))
    return  this.http.get(this.apiUrlPorfolio);
    //return  this.http.get(this.jsonUrl);
  }

  //ESTUDIOS

  getDatosStudy():Observable<any>{
    const url = `${this.apiUrlStudy}/ver`
    return  this.http.get(url);
  }
  deleteStudy(estudio:Study):Observable<Study>{
    //console.log(estudio)
    const url = `${this.apiUrlStudy}/delete/${estudio.id}`
    return this.http.delete<Study>(url)
  }
  addStudy(estudio:Study):Observable<any>{
    const url = `${this.apiUrlStudy}/new`
    return this.http.post<any>(url, estudio)
  }
  saveEditStudy(estudio:Study):Observable<Study>{
    const url = `${this.apiUrlStudy}/update`
    return this.http.post<Study>(url, estudio)
  }

  //Skills

  getDatosSkills():Observable<any>{
    const url = `${this.apiUrlSkills}/ver`
    return  this.http.get(url);
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
  
 




}