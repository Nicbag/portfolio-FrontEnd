import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from "@angular/forms";
import { Route, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   form: FormGroup;

  constructor(private FormBuilder: FormBuilder, private AutService:AutenticacionService, private ruta: Router){
    this.form= this.FormBuilder.group({
      nombreUsuario:["",[Validators.required]],
      passwordUsuario:["",[Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  get nombreUsuario(){
    return this.form.get("nombreUsuario")
  }
  get passwordUsuario(){
    return this.form.get("passwordUsuario")
  }

  onIngresar(event:Event){
    event.preventDefault
    this.AutService.login(this.form.value)
  }
}
