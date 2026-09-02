import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  menuItems = [
    {
      title: 'Home',
      id: 'home',
    },
    {
      title: 'About',
      id: 'about',
    },
    {
      title: 'Projects',
      id: 'projects',
    },
  ];

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
