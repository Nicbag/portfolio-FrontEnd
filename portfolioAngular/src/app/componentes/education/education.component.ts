import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AddEducationComponent } from './add-education/add-education.component';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

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

  constructor(private datosPortfolio: PortfolioService, public authService: AutenticacionService){}

  ngOnInit(): void {
      this.datosPortfolio.verEducaciones().subscribe(data => {
        this.datosEducacion=data;
        this.mostrarEdit.length= this.datosEducacion.length
        for(let i of this.mostrarEdit){
            i= false;
        }
      })
  }

  mostrarFormularioEdit(i: number){
    this.mostrarEdit[i]= !this.mostrarEdit[i];
  }
  recargar(i: number){
    this.mostrarFormularioEdit(i);
    location.reload();
  }

  onSubmit(item:any, i: number){
    if(!(item.institucionEducacion=="" || item.especialidadEducacion=="" ||item.fechainicioEducacion==null ||item.fechafinEducacion==null)){
      if(item.fechainicioEducacion>item.fechafinEducacion){
        alert("El año de inicio no puede ser mayor que el del final!")
      }else{
        this.datosPortfolio.editItemEdu(item).subscribe( item =>{
          this.mostrarEdit[i]=false;
          location.reload();
        });
      }
    }else{
      alert("Ningún campo puede quedar vacío!")
    }
  }  

  //acordate que es el idEducacion el que hay que mandar a la api
  borrarItem(edu:any){
    this.datosPortfolio.deleteItemEdu(edu).subscribe(any =>{
      this.datosEducacion=this.datosEducacion.filter((t: { id: any; }) => t.id !== edu.idEducacion)
      location.reload();
    })
  }

  mostrarFormulario(){
    this.mostrarformularioadd= !this.mostrarformularioadd;
  }
 
  nuevoItem( item: any){
    this.datosPortfolio.addItemEdu(item).subscribe( (item) =>{
      this.datosEducacion.push(item)
      this.mostrarformularioadd=false;
      location.reload();
    })
  }

}
