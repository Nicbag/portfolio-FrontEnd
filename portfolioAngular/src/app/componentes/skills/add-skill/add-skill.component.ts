import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  @Output() addSkill: EventEmitter<any> = new EventEmitter;

  tecnologia: string="";
  nivel: number = 0;
  
  ngOnInit(): void {
    
  }

  onSubmit(){
    if(this.tecnologia.length==0){
      alert("Por favor complete todo el formulario")
    }else{
      if(this.nivel<=0 || this.nivel>100){
        alert("No se puede asignar un valor menor o igual a 0 o mayor a 100")
      }else{
        const newSkill={
          nombreDestreza: this.tecnologia,
          nivelDestreza: this.nivel.toString() +"%"
        }
        this.addSkill.emit(newSkill);
      }
    }
    
  }

}
