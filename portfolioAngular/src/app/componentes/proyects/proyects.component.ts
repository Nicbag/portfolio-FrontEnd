import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  datosProyecto: any;
  mostrarFormularioadd: boolean=false;
  mostrarFormularioedit: boolean[]=[];

  constructor(private datosPortfolio: PortfolioService){}

  ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data => {
        this.datosProyecto=data.proyectos;
        this.mostrarFormularioedit.length=this.datosProyecto.length;
        for(let i of this.mostrarFormularioedit){
          i=false;
        }
      })
  }

  borrarItem(pro:any){
    this.datosPortfolio.deleteItemPro(pro).subscribe(any =>{
      this.datosProyecto=this.datosProyecto.filter((p: { id: any; }) =>{ 
      return p.id !== pro.id});
    })
  }

  agregarItem(item: any){
    this.datosPortfolio.addItemPro(item).subscribe(item =>{
      this.datosProyecto.push(item);
      this.mostrarFormularioadd=false;
    })
  }

  mostrarFormulario(){
    this.mostrarFormularioadd=!this.mostrarFormularioadd;
  }

  mostrarEdit(i:number){
    this.mostrarFormularioedit[i]= !this.mostrarFormularioedit[i];
  }

  onSubmit(item:any, i:number){
    if(item.nombreProyecto.length==0 || item.descripcionProyecto.length==0 || item.institucionProyecto.length==0){
      alert("Por favor complete todo el formulario")
    }else{
      this.datosPortfolio.editItemPro(item).subscribe(item =>{
        this.mostrarFormularioedit[i]=false;
      })
    }
  }
}
