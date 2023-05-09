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
    return this.http.delete<any>(this.apiurl + "/eliminar/educacion/"+item.idEducacion.toString())
  }
  //probado y andando

  deleteItemExp(item:any): Observable<any>{
    return this.http.delete<any>(this.apiurl + "/eliminar/experiencia/"+item.idExperiencia.toString())
  }
  //probado y andando

  deleteItemDes(item:any): Observable<any>{
    return this.http.delete<any>(this.apiurl + "/eliminar/destreza/"+item.idDestreza.toString())
  }
  //probado y andando

  deleteItemCur(item:any): Observable<any>{
    return this.http.delete<any>(this.apiurl + "/eliminar/curso/"+item.idcurso)
  }
  //probado y andando

  deleteItemPro(item:any): Observable<any>{
    return this.http.delete<any>(this.apiurl + "/eliminar/proyecto/"+item.idProyecto)
  }
  //probado y andando

  deleteItemIdi(item:any): Observable<any>{
    return this.http.delete<any>(this.apiurl + "/eliminar/idioma/"+item.idIdioma)
  }
  //probado y andando


  //funciones de agregar items

  addItemEdu(item: any): Observable<any> {
    return this.http.post<any>(this.apiurl + "/agregar/educacion",item)
  }
  //probado y andando

  addItemExp(item: any): Observable<any> {
    return this.http.post<any>(this.apiurl + "/agregar/experiencia",item)
  }
  //probado y andando

  addItemDes(item:any): Observable<any> {
    return this.http.post<any>(this.apiurl + "/agregar/destreza",item)
  }
  //probado y andando

  addItemCur(item:any): Observable<any>{
    return this.http.post<any>(this.apiurl + "/agregar/curso",item)
  }
  //probado y andando

  addItemPro(item: any): Observable<any>{
    return this.http.post<any>(this.apiurl + "/agregar/proyecto",item)
  }
  //probado y andando

  addItemLan(item:any): Observable<any>{
    return this.http.post<any>(this.apiurl + "/agregar/idioma",item)
  }
  //probado y andando


  //para editar items

  editItemEdu(item:any): Observable<any>{
    return this.http.put<any>(this.apiurl + "/modificar/educacion", item)
  }
  //probado y andando 

  editItemPersona(item: any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/modificar/persona", item);
  }
  //probado y andando

  editItemExp(item: any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/modificar/experiencia", item)
  }
  //probado y andado  

  editItemDes(item:any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/modificar/destreza", item)
  }
  //probado y andando 

  editItemCur(item:any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/modificar/curso", item)
  }
  //probado y andando
  
  editItemPro(item:any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/modificar/proyecto", item)
  }
  //probado y andando

  editItemIdi(item:any): Observable<any>{
    return this.http.put<any>(this.apiurl +"/modificar/idioma", item)
  }
  //probado y andando

}
