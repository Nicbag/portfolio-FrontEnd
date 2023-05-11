import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';

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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddEducationComponent } from './componentes/education/add-education/add-education.component';
import { AddExperienceComponent } from './componentes/experience/add-experience/add-experience.component';
import { AddSkillComponent } from './componentes/skills/add-skill/add-skill.component';
import { AddCourseComponent } from './componentes/courses/add-course/add-course.component';
import { AddProyectComponent } from './componentes/proyects/add-proyect/add-proyect.component';
import { AddLanguageComponent } from './componentes/languages/add-language/add-language.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
    AddEducationComponent,
    AddExperienceComponent,
    AddSkillComponent,
    AddCourseComponent,
    AddProyectComponent,
    AddLanguageComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
