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
  fecha: Date= new Date()
  link: string=""
  
  ngOnInit(): void {

  }

  onSubmit(){
    if(this.institucion=="" || this.proyecto == "" || this.descripcion==""){
      alert("Por favor complete todo el formulario");
    }else{
      const newCourse = {
        nombreProyecto: this.proyecto,
        institucionProyecto: this.institucion,
        descripcionProyecto: this.descripcion,
        linkProyecto: this.link,
        fechaProyecto: this.fecha
      }
      this.addProyect.emit(newCourse);
    }
  }
}
