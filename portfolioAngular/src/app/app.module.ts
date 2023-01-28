import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { EducationComponent } from './componentes/education/education.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { CoursesComponent } from './componentes/courses/courses.component';
import { ProyectsComponent } from './componentes/proyects/proyects.component';
import { LanguagesComponent } from './componentes/languages/languages.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PortfolioService } from "./servicios/portfolio.service";

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    CoursesComponent,
    ProyectsComponent,
    LanguagesComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
