import { EmitterVisitorContext } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EducationComponent } from '../education.component';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {
  @Output() addEducation : EventEmitter<any> = new EventEmitter();
  institucion: string="";
  especialidad: string="";
  fechainicio: Date= new Date();
  fechafin:Date= new Date();
  foto: string= "";
  
  constructor(){}

  ngOnInit(): void {

  }
  
  onSubmit(){
    if(this.institucion== "" || this.especialidad =="" || this.fechainicio==null || this.fechafin==null){
      alert("Por favor complete todo el formulario");
    }else{
      if(this.fechainicio> this.fechafin){
        alert("El año de inicio no puede ser menor al del final!")
      }else{
        const newEducation = {
          institucionEducacion: this.institucion,
          especialidadEducacion: this.especialidad,
          fechainicioEducacion: this.fechainicio,
          fechafinEducacion: this.fechafin,
          fotoEducacion: this.foto  
        }
        this.addEducation.emit(newEducation);
      }
    }
  

  }
 
}
