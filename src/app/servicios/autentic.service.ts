import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticService {
  url ="dir api"
  currentUserSubjet:BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    console.log("corre aut");
    this.currentUserSubjet = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))

  }
  iniciarSesio(credenciales:any):Observable<any>{
    return this.http.post(this.url,credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser',JSON.stringify(data));

      return data;
    }))
  }
}
