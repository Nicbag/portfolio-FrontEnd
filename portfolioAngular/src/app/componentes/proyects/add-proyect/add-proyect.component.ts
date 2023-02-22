import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-proyect',
  templateUrl: './add-proyect.component.html',
  styleUrls: ['./add-proyect.component.css']
})
export class AddProyectComponent implements OnInit {
  
  @Output() addProyect: EventEmitter<any> = new EventEmitter;

  proyecto: string=""
  descripcion: string=""
  institucion: string=""
  
  ngOnInit(): void {

  }

  onSubmit(){
    if(this.institucion.length == 0 || this.proyecto.length == 0 || this.descripcion.length==0){
      alert("Por favor complete todo el formulario");
    }else{
      const newCourse = {
        nombreProyecto: this.proyecto,
        institucionProyecto: this.institucion,
        descripcionProyecto: this.descripcion
        
      }
      this.addProyect.emit(newCourse);
    }
  }
}
