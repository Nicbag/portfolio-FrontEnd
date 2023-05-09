import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  
  @Output() addCourse: EventEmitter<any> = new EventEmitter;
  
  institucion:string="";
  curso:string="";
  fechainicio: Date=new Date();
  fechafin: Date=new Date()

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(this.institucion == "" || this.curso == "" || this.fechainicio== null){
      alert("Por favor complete todo el formulario");
    }else{
      if(this.fechafin!==null){
        if(this.fechainicio> this.fechafin){
          alert("El año de inicio no puede ser menor al del final!")
        }else{
          const newCourse = {
            nombreCurso: this.curso,
            institucionCurso: this.institucion,
            fechainicioCurso: this.fechainicio,
            fechafinCurso: this.fechafin
          }
          this.addCourse.emit(newCourse);
        }
      }else{
        const newCourse = {
          nombreCurso: this.curso,
          institucionCurso: this.institucion,
          fechainicioCurso: this.fechainicio,
          fechafinCurso: this.fechafin
        }
        this.addCourse.emit(newCourse);
      }
    }
  }
}
