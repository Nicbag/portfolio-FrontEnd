import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit {
   datosperfil: any;
  constructor( private datosporfolio:PortfolioService){

  }

  ngOnInit(): void {
      this.datosporfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.datosperfil=data;
      })
  }
}
