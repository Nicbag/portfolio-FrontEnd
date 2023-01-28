import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any>{
    return this.http.get("./assets/data/data.json"); //la idea es que se le pase como parametro una url a a cual le vamos hacer un request
  }
}
