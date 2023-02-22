import { outputAst } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {
  @Output() addExperience: EventEmitter<any> = new EventEmitter;

   puesto: string ="";
   descripcion: string ="";
   mes: string[] =[];
   ano: number[] =[];
  
  ngOnInit(): void {
  }
  
  onSubmit(){
    if(this.puesto.length == 0 || this.descripcion.length == 0 || this.mes[0].length==0 || this.mes[1].length==0 || this.ano[0] ==0 || this.ano[1]==0){
      alert("Por favor complete todo el formulario")
    }else{
      if(this.ano[0] > this.ano[1]){
        alert("El año de inicio no puede ser mayor al del final!")
      }
      else{
        const newExperience ={
          puestoExperiencia : this.puesto,
          descripcionExperiencia : this.descripcion,
          fechaInicioExperiencia : {
            month: this.mes[0],
            year : this.ano[0]
          },
          fechaFinExperiencia : {
            month: this.mes[1],
            year : this.ano[1]
          } 
        }
        this.addExperience.emit(newExperience);
      
      }
    }
    
  }
}