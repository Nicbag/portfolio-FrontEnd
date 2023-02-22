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
  mes: string[]=[];
  ano: number[]=[];

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(this.institucion.length == 0 || this.curso.length == 0 || this.mes[0].length == 0 || this.ano[1] == null || this.mes[1].length == 0 || this.ano[1] == null){
      alert("Por favor complete todo el formulario");
    }
    if(this.ano[0]> this.ano[1]){
      alert("El año de inicio no puede ser menor al del final!")
    }else{
      const newCourse = {
        nombreCurso: this.curso,
        institucionCurso: this.institucion,
        fechaInicioCurso: {
          month :this.mes[0], 
          year :this.ano[0]},
        fechaFinCurso: {
          month :this.mes[1], 
          year: this.ano[1]},
      }
      this.addCourse.emit(newCourse);
    }
  }
}
