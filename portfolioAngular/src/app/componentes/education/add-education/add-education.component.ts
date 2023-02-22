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
  mes: String[]= ["", ""];
  ano: number[]=[];
  foto: string= "";
  
  constructor(){}

  ngOnInit(): void {

  }
  
  onSubmit(){
    if(this.institucion.length == 0 || this.especialidad.length == 0 || this.mes[0].length == 0 || this.ano[1] == null || this.mes[1].length == 0 || this.ano[1] == null){
      alert("Por favor complete todo el formulario");
    }else{
      if(this.ano[0]> this.ano[1]){
        alert("El año de inicio no puede ser menor al del final!")
      }else{
        const newEducation = {
          establecimiento: this.institucion,
          orientacion: this.especialidad,
          fechaInicioEducacion: {
            month :this.mes[0], 
            year :this.ano[0]},
          fechaFinEducacion: {
            month :this.mes[1], 
            year: this.ano[1]},
          fotoEducacion: this.foto  
        }
        this.addEducation.emit(newEducation);
      }
    }
    
    

    

  }
 
}
