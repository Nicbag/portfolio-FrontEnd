import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';

const httpOptions ={
  headers: HttpHeaders
}

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  
  private apiurl= "http://localhost:5000"

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any>{
    return this.http.get("./assets/data/data.json");
  }
//gets de los datos del json server habría que hacer para cada uno pero paja
  getEducacion(): Observable<any>{
    return this.http.get(this.apiurl+"/educacion")
  }

//funciones para eliminar items
  deleteItemEdu(item:any): Observable<any>{
       return this.http.delete<any>(this.apiurl + "/educacion/"+item.id.toString())
  }

  deleteItemExp(item:any): Observable<any>{
    return this.http.delete<any>(this.apiurl + "/experiencia/"+item.id.toString())
  }

  deleteItemDes(item:any): Observable<any>{
    return this.http.delete<any>(this.apiurl + "/destrezas/"+item.id.toString())
  }

  deleteItemCur(item:any): Observable<any>{
    return this.http.delete<any>(this.apiurl + "/cursos/"+item.id.toString())
  }

  deleteItemPro(item:any): Observable<any>{
    return this.http.delete<any>(this.apiurl + "/proyectos/"+item.id.toString())
  }

  deleteItemIdi(item:any): Observable<any>{
    return this.http.delete<any>(this.apiurl + "/idiomas/"+item.id.toString())
  }

  //funciones de agregar items

  addItemEdu(item: any): Observable<any> {
    return this.http.post<any>(this.apiurl + "/educacion/",item)
  }
  addItemExp(item: any): Observable<any> {
    return this.http.post<any>(this.apiurl + "/experiencia/",item)
  }
  addItemDes(item:any): Observable<any> {
    return this.http.post<any>(this.apiurl + "/destrezas/",item)
  }
  addItemCur(item:any): Observable<any>{
    return this.http.post<any>(this.apiurl + "/cursos/",item)
  }
  addItemPro(item: any): Observable<any>{
    return this.http.post<any>(this.apiurl + "/proyectos/",item)
  }
  addItemLan(item:any): Observable<any>{
    return this.http.post<any>(this.apiurl + "/idiomas/",item)
  }

  //para editar items
  editItemEdu(item:any): Observable<any>{
    return this.http.put<any>(this.apiurl + "/educacion/"+item.id.toString(), item)
  }
  editItemAce(item: any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/acercade/", item);
  }
  editItemExp(item: any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/experiencia/"+item.id.toString(), item)
  }
  editItemDes(item:any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/destrezas/"+item.id.toString(), item)
  }
  editItemCur(item:any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/cursos/"+item.id.toString(), item)
  }
  editItemPro(item:any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/proyectos/"+item.id.toString(), item)
  }
  editItemIdi(item:any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/idiomas/"+item.id.toString(), item)
  }
}
