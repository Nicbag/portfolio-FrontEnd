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
      this.datosPortfolio.obtenerDatos().subscribe(data => {
        this.datosCurso=data.cursos;
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
  
  onSubmit(item:any, i:number){
    if(item.nombreCurso.length==0 || item.institucionCurso.length==0 || item.fechaInicioCurso.month.length==0 || item.fechaInicioCurso.year==0 || item.fechaFinCurso.month.length==0 || item.fechaFinCurso.year==0 ){
      alert("Por favor complete todo el formulario")
    }else{
      if(item.fechaInicioCurso.year> item.fechaFinCurso.year){
        alert("El año de inicio no puede ser menor que del final!")
      }else{
        this.datosPortfolio.editItemCur(item).subscribe(item =>{
          this.mostrarFormularioedit[i]= false;
        })
      }
    }
  }
}
