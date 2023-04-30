import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent  implements OnInit {
  datosDestreza: any;
  mostrarFormularioadd: boolean= false;
  mostrarFormularioedit: boolean[]= [];

  constructor(private datosPortfolio: PortfolioService){}

  ngOnInit(): void {
      this.datosPortfolio.verDestrezas().subscribe(data => {
        console.log(data);
        this.datosDestreza=data;
        this.mostrarFormularioedit.length=this.datosDestreza.length
        for(let i of this.mostrarFormularioedit){
          i=false;
        }
      })
  }
  borrarItem(des:any){
    this.datosPortfolio.deleteItemDes(des).subscribe(any =>{
      this.datosDestreza=this.datosDestreza.filter((d: { id: any; }) => d.id !== des.id);
    })
  }

  agregarItem(item: any){
    this.datosPortfolio.addItemDes(item).subscribe( item =>{
      this.datosDestreza.push(item);
      this.mostrarFormularioadd=false;
    })
  }

  mostrarFormulario(){
    this.mostrarFormularioadd= !this.mostrarFormularioadd;
  }

  mostrarEdit(i: number){
    this.mostrarFormularioedit[i]=!this.mostrarFormularioedit[i]
  }

  onSubmit(item:any, i:number){
    if(item.nombreDestreza=="" || item.nivelDestreza==0){
      alert("Por favor complete todo el formulario")
    }else{
      if(item.nivelDestreza<=0 || item.nivelDestreza> 100){
        alert("El nivel de experiencia tiene que ser mayor a 0 y menor o igual a 100")
      }else{
      this.datosPortfolio.editItemDes(item).subscribe(item =>{
        this.mostrarFormularioedit[i]= false;
        location.reload();
        })
      }
    }
  }
}
