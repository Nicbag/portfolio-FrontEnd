import { Component, OnInit } from '@angular/core';
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

  constructor(private datosPortfolio: PortfolioService){}

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
    })
  }

  agregarItem(item:any){
    this.datosPortfolio.addItemLan(item).subscribe(item => {
      this.datosIdioma.push(item);
      this.mostrarFormularioadd= false;
    })
  }

  mostrarFormulario(){
    this.mostrarFormularioadd= !this.mostrarFormularioadd
  }

  mostrarEdit(i:number){
    this.mostrarFormularioedit[i]=!this.mostrarFormularioedit[i];
  }

  onSubmit(item:any, i:number){
    if(item.nombreIdioma.length==0 || item.nivelIdioma.length==0 || item.valorIdioma ==0){
      alert("Por favor complete todo el formulario")
    }else{
      if(item.valorIdioma<=0 || item.valorIdioma> 100){
        alert("El nivel no puede ser menor o igual que 0 ni mayor que 100!")
      }else{
        item.valorIdioma= item.valorIdioma.toString() +"%"
        this.datosPortfolio.editItemIdi(item).subscribe(item => {
          this.mostrarFormularioedit[i]= false
        }) 
      }
    }
  }
}
