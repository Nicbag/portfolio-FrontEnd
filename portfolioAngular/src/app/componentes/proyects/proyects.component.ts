import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
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

  constructor(private datosPortfolio: PortfolioService, public authService: AutenticacionService){}

  ngOnInit(): void {
      this.datosPortfolio.verProyectos().subscribe(data => {
        this.datosProyecto=data;
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
      location.reload()
    })
  }

  agregarItem(item: any){
    this.datosPortfolio.addItemPro(item).subscribe(item =>{
      this.datosProyecto.push(item);
      this.mostrarFormularioadd=false;
      location.reload()
    })
  }

  mostrarFormulario(){
    this.mostrarFormularioadd=!this.mostrarFormularioadd;
  }

  mostrarEdit(i:number){
    this.mostrarFormularioedit[i]= !this.mostrarFormularioedit[i];
  }

  recargar(i: number){
    this.mostrarEdit(i);
    location.reload();
  }

  onSubmit(item:any, i:number){
    if(item.nombreProyecto=="" || item.descripcionProyecto=="" || item.institucionProyecto=="" || item.fechaProyecto==""){
      alert("Por favor complete todo el formulario")
    }else{
      this.datosPortfolio.editItemPro(item).subscribe(item =>{
        this.mostrarFormularioedit[i]=false;
        location.reload();
      })
    }
  }
}
