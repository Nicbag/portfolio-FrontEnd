import { Component, OnInit } from '@angular/core';
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
      this.datosporfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.datosperfil=data.acercade;
      })
  }

  mostrarEditAcerca(){
    this.mostrareditAcercaDe=!this.mostrareditAcercaDe;
  }

  onSubmitAcerca( acercaDe: any){
    if(acercaDe.aboutMe.length==0){
      alert("No puede dejar vacío el espacio de Acerca de mí!")
    }else{
      this.datosporfolio.editItemAce(acercaDe).subscribe(() =>{
        this.mostrareditAcercaDe= false;
      })
    }
  }
  onSubmitPerfil(item: any){
    if(item.nombre.length== 0 || item.rubro.length== 0 || item.ciudad.length==0 || item.actualidad.length==0){
      alert("Por favor completar todo el formulario")
    }else{
      this.datosporfolio.editItemAce(item).subscribe(item =>{
        this.mostrareditPerfil= false;
      })
    }
  }

  mostrarEditPerfil(){
    this.mostrareditPerfil= !this.mostrareditPerfil
  }
}
