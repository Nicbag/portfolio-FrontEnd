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
   empresa:string="";
   fechainicio: Date= new Date();
   fechafin: Date= new Date();
  
  ngOnInit(): void {
  }
  
  onSubmit(){
    if(this.puesto == "" || this.descripcion == "" || this.empresa=="" || this.fechainicio==null){
      alert("Por favor complete todo el formulario")
      console.log(this.puesto)
      console.log(this.descripcion)
      console.log(this.empresa)
    }else{
      if(this.fechafin!==null){
        if(this.fechainicio > this.fechafin){
          alert("El año de inicio no puede ser mayor al del final!")
        }
        else{
          const newExperience ={
            puestoExperiencia : this.puesto,
            descripcionExperiencia : this.descripcion,
            empresaExperiencia: this.empresa,
            fechainicioExperiencia : this.fechainicio,
            fechafinExperiencia : this.fechafin
          }
          this.addExperience.emit(newExperience);
        }
      }else{
        const newExperience ={
          puestoExperiencia : this.puesto,
          descripcionExperiencia : this.descripcion,
          empresaExperiencia: this.empresa,
          fechainicioExperiencia : this.fechainicio,
          fechafinExperiencia : this.fechafin
        }
        this.addExperience.emit(newExperience);
      }
    }
    
  }
}