import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  datosperfil: any

  constructor(private datosporfolio:PortfolioService){
    this.datosporfolio.verPersona().subscribe(data =>{
      this.datosperfil= data
    })
  }
  ngOnInit(): void {
      
  }
}
