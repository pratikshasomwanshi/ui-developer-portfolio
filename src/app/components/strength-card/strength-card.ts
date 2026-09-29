// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-strength-card',
//   standalone: true,
//   imports: [],
//   templateUrl: './strength-card.html',
//   styleUrl: './strength-card.scss',
// })
// export class StrengthCardComponent {
//   @Input() strength!: any;
// }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-strength-card',
  standalone: true,
  imports: [],
  templateUrl: './strength-card.html',
  styleUrl: './strength-card.scss',
})
export class StrengthCardComponent {
  @Input() strength!: any;
}
