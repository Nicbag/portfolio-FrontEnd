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
      this.datosPortfolio.verExperiencias().subscribe(data => {
        this.datosExperiencia=data;
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

  revisarfechafin(fechafin:String){
    if(fechafin!=null){
      return false
    }else{
      return true;
    }
  }

  onSubmit(item: any, i: number){
    if(item.puestoExperiencia== "" || item.descripcionExperiencia=="" || item.fechainicioExperiencia=="" || item.ciudadExperiencia==""){
      alert("Por favor completar todo el formulario(fecha fin puede ser vacía)")
    }else{
      if(item.fechafinExperiencia!==""){
        if(item.fechainicioExperiencia> item.fechafinExperiencia){
          alert("El año de inicio no puede ser menor que el final!")
        }else{
          this.datosPortfolio.editItemExp(item). subscribe( item =>{
            this.mostrarFormularioedit[i]= false;
            location.reload();
          })
        }
      }else{
        this.datosPortfolio.editItemExp(item). subscribe( item =>{
          this.mostrarFormularioedit[i]= false;
          location.reload();
        })
      }
    }
  }
}
