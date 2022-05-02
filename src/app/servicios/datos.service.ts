import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable} from '@angular/core';
import {Observable} from 'rxjs'
import{ Study, Skills, Experience, Persona} from '../interfaces' 
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
  apiUrlExp:string = 'https://my-json-server.typicode.com/ArgLogan/mokEndPoint/experiencias';
  apiUrlSkills:string = ' http://localhost:5000/skills';
  apiUrlStudy:string = ' http://localhost:5000/estudios'; 
  apiUrlPorfolio:string =' http://localhost:5000/porfolio';
  apiUrlExp:string = ' http://localhost:5000/experiencias';
    */
  apiUrlPersona:string =' https://arglogan.herokuapp.com/persona';
  apiUrlHeader:string =' https://arglogan.herokuapp.com/header';
  apiUrlSkills:string = ' https://arglogan.herokuapp.com/skill';
  apiUrlStudy:string = ' https://arglogan.herokuapp.com/study';
  apiUrlExp:string = ' https://arglogan.herokuapp.com/experiencia';
  jsonUrl:string =' db.json/porfolio';

  constructor( private http:HttpClient ) { }
   
  //ABOUT
  getDatosPorfolio():Observable<any>{
    const url = `${this.apiUrlPersona}/ver`
    return  this.http.get(url);
  }

   atualizaFotoPerfil(persona:Persona):Observable<Persona>{
    console.log(persona)
    const url = `${this.apiUrlPersona}/update`
    console.log(url)
    return this.http.post<Persona>(url, persona)
  }


  getDatosHeader():Observable<any>{
    const url = `${this.apiUrlHeader}/ver`
    return  this.http.get(url);
  }

  //ESTUDIOS

  getDatosStudy():Observable<any>{
    const url = `${this.apiUrlStudy}/ver`
    return  this.http.get(url);
  }
  deleteStudy(estudio:Study):Observable<Study>{
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
    const url = `${this.apiUrlExp}/ver`
    return  this.http.get(url);
  }
  
  deleteExp(experiencia:Experience):Observable<Experience>{
    const url = `${this.apiUrlExp}/delete/${experiencia.id}`
    return this.http.delete<Experience>(url)
  }
  addExp(exp:Experience):Observable<any>{
    const url = `${this.apiUrlExp}/new`
    return this.http.post<any>(url, exp)
  }
  saveEditExp(exp:Experience):Observable<Experience>{
    const url = `${this.apiUrlExp}/update`
    return this.http.post<Experience>(url, exp)
  }
 
  
 




}