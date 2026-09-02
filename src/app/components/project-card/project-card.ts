import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCardComponent {
  @Input() project!: any;
  isHover = false;
  isLiveHover = false;

  openLink(): void {
    window.open(this.project.link, '_blank');
  }
}
