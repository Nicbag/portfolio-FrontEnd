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
  
  private apiurl= "http://localhost:8080/api"

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any>{
    return this.http.get<any>("./assets/data/data.json");
  }

//gets de los datos 

  verEducaciones(): Observable<any>{
    return this.http.get(this.apiurl+"/ver/educaciones")
  }
  //probado y andando

  verCursos(): Observable<any>{
    return this.http.get(this.apiurl+"/ver/cursos")
  }
  //probado y andando

  verDestrezas(): Observable<any>{
    return this.http.get(this.apiurl+"/ver/destrezas")
  }
  //probado y andando

  verExperiencias(): Observable<any>{
    return this.http.get(this.apiurl+"/ver/experiencias")
  }
  //probado y andando

  verIdiomas(): Observable<any>{
    return this.http.get(this.apiurl+"/ver/idiomas")
  }
  //probado y andando

  verProyectos(): Observable<any>{
    return this.http.get(this.apiurl+"/ver/proyectos")
  }
  //probado y andando

  verPersona(): Observable<any>{
    return this.http.get(this.apiurl+"/ver/persona")
  }
  //probado y andando

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
    return this.http.put<any>(this.apiurl + "/modificar/educacion", item)
  }
  //probado y andando ver tema de cancelar form y reload

  editItemPersona(item: any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/modificar/persona", item);
  }
  //probado y andando ver tema de cancelar form y reload

  editItemExp(item: any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/modificar/experiencia", item)
  }
  //probado y andado ver tema de cancelar form y reload 

  editItemDes(item:any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/modificar/destreza", item)
  }
  //probado y andando ver tema de cancelar form y reload

  editItemCur(item:any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/modificar/curso", item)
  }
  //probado y andando ver tema de cancelar form y reload
  
  editItemPro(item:any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/modificar/proyecto", item)
  }
  //probado y andando

  editItemIdi(item:any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/modificar/idioma", item)
  }


}
