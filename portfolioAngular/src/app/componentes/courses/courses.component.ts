import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  datosCurso: any;
  mostrarFormularioadd:boolean=false;
  mostrarFormularioedit: boolean[]= []

  constructor(private datosPortfolio: PortfolioService){}

  ngOnInit(): void {
      this.datosPortfolio.verCursos().subscribe(data => {
        this.datosCurso=data;
        this.mostrarFormularioedit.length= this.datosCurso.length;
        for(let i of this.mostrarFormularioedit){
          i=false;
        }
      })
  }
  borrarItem(cur:any){
    this.datosPortfolio.deleteItemCur(cur).subscribe(any =>{
      this.datosCurso=this.datosCurso.filter((c: { id: any; }) => c.id !== cur.id)
    })
  }

  agregarCurso(item: any){
    this.datosPortfolio.addItemCur(item).subscribe(item =>{
      this.datosCurso.push(item);
      this.mostrarFormularioadd=false;
    })
  }
  mostrarFormulario(){
    this.mostrarFormularioadd=!this.mostrarFormularioadd;
  }
  
  mostrarEdit(i: number){
    this.mostrarFormularioedit[i]= !this.mostrarFormularioedit[i];
  }
  revisarfechafin(fechafin:String){
    if(fechafin!=null){
      return false
    }else{
      return true;
    }
  }
  onSubmit(item:any, i:number){
    if(item.nombreCurso=="" || item.institucionCurso=="" || item.fechainicioCurso== ""){
      alert("Por favor complete todo el formulario")
    }else{
      if(item.fechafinCurso!==""){
        if(item.fechainicioCurso> item.fechafinCurso){
          alert("El año de inicio no puede ser menor que del final!")
        }else{
          this.datosPortfolio.editItemCur(item).subscribe(item =>{
            this.mostrarFormularioedit[i]= false;
            location.reload();
          })
        } 
      }else{
        this.datosPortfolio.editItemCur(item).subscribe(item =>{
        this.mostrarFormularioedit[i]= false;
        location.reload();
        })
      }
    }
  }
}
