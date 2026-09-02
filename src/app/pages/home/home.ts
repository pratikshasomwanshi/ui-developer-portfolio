import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from './../../components/about/about';
import { ExperienceComponent } from '../../components/experience/experience';
import { ProjectsComponent } from '../../components/projects/projects';
import { StrengthsComponent } from '../../components/strengths/strengths';
import { ContactComponent } from '../../components/contact/contact';
import { FooterComponent } from './../../layout/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    StrengthsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
