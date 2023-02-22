import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {
  @Output() addLanguage: EventEmitter<any> = new EventEmitter;

  idioma: string=""
  nivel: string=""
  valor: number= 0
  
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.idioma.length==0 || this.nivel.length==0){
      alert("Por favor complete todo el formulario")
    }else{
      if(this.valor<=0 || this.valor>100){
        alert("No se puede asignar un valor menor o igual a 0 o mayor a 100")
      }else{
        const newLanguage={
          nombreIdioma: this.idioma,
          nivelIdioma: this.nivel,
          valorIdioma: this.valor.toString() +"%"
        }
        this.addLanguage.emit(newLanguage);
      }
    }
  }
}
