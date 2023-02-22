import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  datosExperiencia: any;
  mostrarFormularioadd: boolean= false;
  mostrarFormularioedit: boolean[]= [];

  constructor(private datosPortfolio: PortfolioService){}

  ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data => {
        this.datosExperiencia=data.experiencia;
        this.mostrarFormularioedit.length= this.datosExperiencia.length;
        for(let i of this.mostrarFormularioedit){
          i= false;
        }

      })
  }

  borrarItem(exp:any){
    this.datosPortfolio.deleteItemExp(exp).subscribe(any => {
      this.datosExperiencia=this.datosExperiencia.filter((e: { id: any; }) => e.id !== exp.id)
    })
  }

  nuevaExperiencia(item:any){
    this.datosPortfolio.addItemExp(item).subscribe( (item) =>{
      this.datosExperiencia.push(item);
      this.mostrarFormularioadd=false;
    })
  }

  mostrarformulario(){
    this.mostrarFormularioadd= !this.mostrarFormularioadd;
  }

  mostrarEdit(i : number){
    this.mostrarFormularioedit[i]=!this.mostrarFormularioedit[i];
  }

  onSubmit(item: any, i: number){
    if(item.puestoExperiencia.length== 0 || item.descripcionExperiencia.length==0 || item.fechaInicioExperiencia.month.length==0 || item.fechaInicioExperiencia.year == 0 || item.fechaFinExperiencia.month.length==0 || item.fechaFinExperiencia.year == 0 ){
      alert("Por favor completar todo el formulario")
    }else{
      if(item.fechaInicioExperiencia.year> item.fechaFinExperiencia.year){
        alert("El año de inicio no puede ser menor que el final!")
      }else{
        this.datosPortfolio.editItemExp(item). subscribe( item =>{
          this.mostrarFormularioedit[i]= false
        })
      }
    }
  }
}
