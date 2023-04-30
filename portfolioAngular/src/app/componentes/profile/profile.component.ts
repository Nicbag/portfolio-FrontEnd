import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit {
   
  datosperfil: any;
  mostrareditAcercaDe: boolean=false
  mostrareditPerfil: boolean=false


  constructor( private datosporfolio:PortfolioService){

  }

  ngOnInit(): void {
      this.datosporfolio.verPersona().subscribe(data =>{
        console.log(data);
        this.datosperfil=data;
      })
  }

  mostrarEditAcerca(){
    this.mostrareditAcercaDe=!this.mostrareditAcercaDe;
  }

  onSubmitAcerca( datos: any){
    for(let item of datos){
      if(item.acercadePersona==""){
        alert("No puede dejar vacío el espacio de Acerca de mí!")
      }else{
        this.datosporfolio.editItemPersona(item).subscribe(() =>{
          this.mostrareditAcercaDe= false;
          location.reload();
        })
      }
    }
  }
  //probado y andando
  onSubmitPerfil(datos: any){
    for(let item of datos ){
      if(item.nombrePersona== "" ||item.apellidoPersona=="" || item.rubroPersona== "" || item.ciudadPersona=="" || item.actualidadPersona==""){
        alert("Por favor completar todo el formulario")
      }else{
        this.datosporfolio.editItemPersona(item).subscribe(item =>{
          this.mostrareditPerfil= false;
          location.reload();
        })
      }
    }
  }
  //probado y andando

  mostrarEditPerfil(){
    this.mostrareditPerfil= !this.mostrareditPerfil
  }
}
