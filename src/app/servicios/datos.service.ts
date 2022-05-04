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
  /*
  apiUrl:string = 'https://my-json-server.typicode.com/ArgLogan/mokEndPoint';
  apiUrl:string = ' http://localhost:5000';
  apiUrl:string = ' http://localhost:8080/porfolio';
  jsonUrl:string =' db.json/porfolio';
    */
  //apiUrl:string = 'https://arglogan.herokuapp.com';
  apiUrl:string = ' http://localhost:8080';

  //Con esto elijo que secion usa los metodos 
  metodoUrl:string[] = ['/persona',      //0
                        '/header',       //1
                        '/skill',        //2
                        '/study',        //3
                        '/experiencia',  //4
                        '/idioma',       //5
                        '/proyect',      //6
                        '/certificado']; //7

  constructor( private http:HttpClient ) { }
   
  
  getDatos(seccion:number):Observable<any>{
    const url = `${this.apiUrl}${this.metodoUrl[seccion]}/ver`
    return  this.http.get(url);
  }
  atualizaDatos(dato:any, seccion:number):Observable<any>{
    console.log(dato)
    const url = `${this.apiUrl}${this.metodoUrl[seccion]}/update`
    return this.http.post<any>(url, dato)
  }
  deleteDatos(dato:any, seccion:number):Observable<any>{
    const url = `${this.apiUrl}${this.metodoUrl[seccion]}/delete/${dato.id}`
    return this.http.delete<any>(url)
  }
  addSDatos(dato:any,seccion:number):Observable<any>{
    const url = `${this.apiUrl}${this.metodoUrl[seccion]}/new`
    return this.http.post<any>(url, dato)
  }

}