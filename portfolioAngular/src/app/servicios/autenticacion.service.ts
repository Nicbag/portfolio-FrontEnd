import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  apiurl="http://localhost:8080/api"
  currentUserSubject: BehaviorSubject<any>

  constructor(private http: HttpClient, private ruta: Router) { 
    this.currentUserSubject= new BehaviorSubject(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'))
  }

  login(credenciales:any){
    return this.http.post(this.apiurl+"/login",credenciales).subscribe((data:any)=>{
      if(data.token == null){
        alert("El usuario o contraseña son incorrectos")
      }else{
        this.ruta.navigate(["/inicio"])
        localStorage.setItem('auth_token', data.token)
        console.log(localStorage.getItem('auth_token'))
      }  
    })
  }

  logout(){
    localStorage.removeItem('auth_token')
  }

  logIn(): boolean{
    return(localStorage.getItem('auth_token') != null)
  }

}
