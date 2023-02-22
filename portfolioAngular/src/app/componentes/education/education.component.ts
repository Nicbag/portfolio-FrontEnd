import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AddEducationComponent } from './add-education/add-education.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  datosEducacion: any= null;
  mostrarformularioadd: boolean= false;
  mostrarEdit: boolean[]=[];

  editEstablecimiento: string= ""
  editOrientacion: string=""
  editmes: string[]=[]
  editano: number[]=[]

  constructor(private datosPortfolio: PortfolioService){}

  ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data => {
        this.datosEducacion=data.educacion;
        this.mostrarEdit.length= this.datosEducacion.length
        for(let i of this.mostrarEdit){
            i= false;
        }
      })
  }

  mostrarFormularioEdit(i: number){
    console.log("llegó")
    this.mostrarEdit[i]= !this.mostrarEdit[i];
  }

  onSubmit(item:any, i: number){
    if(item.fechaInicioEducacion.year>item.fechaFinEducacion.year){
      alert("El año de inicio no puede ser mayor que el del final!")
    }else{
      this.datosPortfolio.editItemEdu(item).subscribe( item =>{
        this.mostrarEdit[i]=false;
      });
    }
  }

  borrarItem(edu:any){
    console.log(edu);
    this.datosPortfolio.deleteItemEdu(edu).subscribe(any =>{
      this.datosEducacion=this.datosEducacion.filter((t: { id: any; }) => t.id !== edu.id)
    })
  }

  mostrarFormulario(){
    this.mostrarformularioadd= !this.mostrarformularioadd;
  }

  nuevoItem( item: any){
    this.datosPortfolio.addItemEdu(item).subscribe( (item) =>{
      this.datosEducacion.push(item)
      this.mostrarformularioadd=false;
    })
  }

}
