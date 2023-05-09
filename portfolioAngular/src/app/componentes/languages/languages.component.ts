import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent  implements OnInit{
  datosIdioma: any;
  mostrarFormularioadd:boolean=false;
  mostrarFormularioedit: boolean[]=[];

  constructor(private datosPortfolio: PortfolioService, public authService: AutenticacionService){}

  ngOnInit(): void {
      this.datosPortfolio.verIdiomas().subscribe(data => {
        this.datosIdioma=data;
        this.mostrarFormularioedit.length= this.datosIdioma.length
        for(let i of this.mostrarFormularioedit){
          i=false;
        }
      })
  }

  borrarItem(idi:any){
    this.datosPortfolio.deleteItemIdi(idi).subscribe( any =>{
      this.datosIdioma=this.datosIdioma.filter((i: { id: any; }) => i.id !== idi.id);
      location.reload()
    })
  }

  agregarItem(item:any){
    this.datosPortfolio.addItemLan(item).subscribe(item => {
      this.datosIdioma.push(item);
      this.mostrarFormularioadd= false;
      location.reload()
    })
  }

  mostrarFormulario(){
    this.mostrarFormularioadd= !this.mostrarFormularioadd
  }

  mostrarEdit(i:number){
    this.mostrarFormularioedit[i]=!this.mostrarFormularioedit[i];
  }
  recargar(i: number){
    this.mostrarEdit(i);
    location.reload();
  }

  onSubmit(item:any, i:number){
    if(item.nombreIdioma=="" || item.nivelIdioma=="" || item.valornivelIdioma ==0){
      alert("Por favor complete todo el formulario")
    }else{
      if(item.valornivelIdioma<=0 || item.valornivelIdioma> 100){
        alert("El nivel no puede ser menor o igual que 0 ni mayor que 100!")
      }else{
        this.datosPortfolio.editItemIdi(item).subscribe(item => {
          this.mostrarFormularioedit[i]= false;
          location.reload();
        }) 
      }
    }
  }
}
