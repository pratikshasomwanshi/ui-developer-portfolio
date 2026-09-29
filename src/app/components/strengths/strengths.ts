// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { StrengthCardComponent } from '../strength-card/strength-card';

// @Component({
//   selector: 'app-strengths',
//   standalone: true,
//   imports: [StrengthCardComponent],
//   templateUrl: './strengths.html',
//   styleUrl: './strengths.scss',
// })
// export class StrengthsComponent implements OnInit, OnDestroy {
//   currentPage = 0;

//   private slideInterval!: ReturnType<typeof setInterval>;

//   pages = [
//     // ==========================
//     // PAGE 1 - 6 CARDS
//     // ==========================
//     [
//       {
//         icon: 'icons/layout 1.svg',
//         title: 'Wireframing',
//         level: 'Advanced',
//         progress: 85,
//       },
//       {
//         icon: 'icons/prototype 1.svg',
//         title: 'Prototyping',
//         level: 'Advanced',
//         progress: 82,
//       },
//       {
//         icon: 'icons/copywriting 1.svg',
//         title: 'User Research',
//         level: 'Proficient',
//         progress: 75,
//       },
//       {
//         icon: 'icons/people-flow 1.svg',
//         title: 'User Flows',
//         level: 'Advanced',
//         progress: 84,
//       },
//       {
//         icon: 'icons/page-optimization 1.svg',
//         title: 'Usability Testing',
//         level: 'Proficient',
//         progress: 72,
//       },
//       {
//         icon: 'icons/enterprise-architecture 1.svg',
//         title: 'Information Architecture',
//         level: 'Proficient',
//         progress: 76,
//       },
//     ],

//     // ==========================
//     // PAGE 2 - 8 CARDS
//     // ==========================
//     [
//       {
//         icon: 'images/dev 1 (1).png',
//         title: 'Dev Handoff',
//         level: 'Figma + Annotations',
//       },
//       {
//         icon: 'images/workflow-alt (3) 1 (1).png',
//         title: 'Agile Workflow',
//         level: 'Sprints + Standups',
//       },
//       {
//         icon: 'images/Group.png',
//         title: 'Jira',
//         level: 'Issue Tracking',
//       },
//       {
//         icon: 'images/trello 2 (1).png',
//         title: 'Trello',
//         level: 'Proficient',
//       },
//       {
//         icon: 'images/online-interview 1.png',
//         title: 'Stakeholder Interviews',
//         level: 'Requirements Gathering',
//       },
//       {
//         icon: 'images/Vector (34).png',
//         title: 'Design Documentation',
//         level: 'Specs + Guidelines',
//       },
//       {
//         icon: 'images/hands-together 1 (1).png',
//         title: 'Team Collaboration',
//         level: 'Cross-Functional Teams',
//       },
//       {
//         icon: 'images/person-presenting 1 (1).png',
//         title: 'Client Presentations',
//         level: 'Proposals + Demos',
//       },
//     ],

//     // ==========================
//     // PAGE 3 - 6 CARDS
//     // ==========================
//     [
//       {
//         icon: 'icons/website-image-search 1.svg',
//         title: 'Visual Design',
//         level: 'Advanced',
//         progress: 82,
//       },
//       {
//         icon: 'icons/webpage-list 1.svg',
//         title: 'Interaction Design',
//         level: 'Advanced',
//         progress: 86,
//       },
//       {
//         icon: 'icons/dashboard 1.svg',
//         title: 'Dashboard Systems',
//         level: 'Advanced',
//         progress: 88,
//       },
//       {
//         icon: 'icons/mobile 1.svg',
//         title: 'Mobile UI',
//         level: 'Proficient',
//         progress: 90,
//       },
//       {
//         icon: 'icons/responsive-design 1.svg',
//         title: 'Responsive Layouts',
//         level: 'Advanced',
//         progress: 82,
//       },
//       {
//         icon: 'icons/web-design 1.svg',
//         title: 'Interface Design',
//         level: 'Advanced',
//         progress: 86,
//       },
//     ],
//   ];

//   // ==========================
//   // AUTO SLIDE
//   // ==========================

//   ngOnInit(): void {
//     this.slideInterval = setInterval(() => {
//       // LEFT → RIGHT visual movement
//       this.currentPage--;

//       // जब first page के आगे जाए
//       // तो last page पर जाए
//       if (this.currentPage < 0) {
//         this.currentPage = this.pages.length - 1;
//       }
//     }, 800);
//   }

//   ngOnDestroy(): void {
//     clearInterval(this.slideInterval);
//   }
// }

// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { StrengthCardComponent } from '../strength-card/strength-card';

// @Component({
//   selector: 'app-strengths',
//   standalone: true,
//   imports: [StrengthCardComponent],
//   templateUrl: './strengths.html',
//   styleUrl: './strengths.scss',
// })
// export class StrengthsComponent implements OnInit, OnDestroy {
//   currentPage = 0;

//   isResetting = false;

//   private slideInterval!: ReturnType<typeof setInterval>;
//   private resetTimeout!: ReturnType<typeof setTimeout>;

//   pages = [
//     // ==========================
//     // PAGE 1 - 6 CARDS
//     // ==========================
//     [
//       {
//         icon: 'icons/layout 1.svg',
//         title: 'Wireframing',
//         level: 'Advanced',
//         progress: 85,
//       },
//       {
//         icon: 'icons/prototype 1.svg',
//         title: 'Prototyping',
//         level: 'Advanced',
//         progress: 82,
//       },
//       {
//         icon: 'icons/copywriting 1.svg',
//         title: 'User Research',
//         level: 'Proficient',
//         progress: 75,
//       },
//       {
//         icon: 'icons/people-flow 1.svg',
//         title: 'User Flows',
//         level: 'Advanced',
//         progress: 84,
//       },
//       {
//         icon: 'icons/page-optimization 1.svg',
//         title: 'Usability Testing',
//         level: 'Proficient',
//         progress: 72,
//       },
//       {
//         icon: 'icons/enterprise-architecture 1.svg',
//         title: 'Information Architecture',
//         level: 'Proficient',
//         progress: 76,
//       },
//     ],

//     // ==========================
//     // PAGE 2 - 8 CARDS
//     // ==========================
//     [
//       {
//         icon: 'images/dev 1 (1).png',
//         title: 'Dev Handoff',
//         level: 'Figma + Annotations',
//       },
//       {
//         icon: 'images/workflow-alt (3) 1 (1).png',
//         title: 'Agile Workflow',
//         level: 'Sprints + Standups',
//       },
//       {
//         icon: 'images/Group.png',
//         title: 'Jira',
//         level: 'Issue Tracking',
//       },
//       {
//         icon: 'images/trello 2 (1).png',
//         title: 'Trello',
//         level: 'Proficient',
//       },
//       {
//         icon: 'images/online-interview 1.png',
//         title: 'Stakeholder Interviews',
//         level: 'Requirements Gathering',
//       },
//       {
//         icon: 'images/Vector (34).png',
//         title: 'Design Documentation',
//         level: 'Specs + Guidelines',
//       },
//       {
//         icon: 'images/hands-together 1 (1).png',
//         title: 'Team Collaboration',
//         level: 'Cross-Functional Teams',
//       },
//       {
//         icon: 'images/person-presenting 1 (1).png',
//         title: 'Client Presentations',
//         level: 'Proposals + Demos',
//       },
//     ],

//     // ==========================
//     // PAGE 3 - 6 CARDS
//     // ==========================
//     [
//       {
//         icon: 'icons/website-image-search 1.svg',
//         title: 'Visual Design',
//         level: 'Advanced',
//         progress: 82,
//       },
//       {
//         icon: 'icons/webpage-list 1.svg',
//         title: 'Interaction Design',
//         level: 'Advanced',
//         progress: 86,
//       },
//       {
//         icon: 'icons/dashboard 1.svg',
//         title: 'Dashboard Systems',
//         level: 'Advanced',
//         progress: 88,
//       },
//       {
//         icon: 'icons/mobile 1.svg',
//         title: 'Mobile UI',
//         level: 'Proficient',
//         progress: 90,
//       },
//       {
//         icon: 'icons/responsive-design 1.svg',
//         title: 'Responsive Layouts',
//         level: 'Advanced',
//         progress: 82,
//       },
//       {
//         icon: 'icons/web-design 1.svg',
//         title: 'Interface Design',
//         level: 'Advanced',
//         progress: 86,
//       },
//     ],
//   ];

//   // First page clone for seamless loop
//   displayPages = [...this.pages, this.pages[0]];

//   ngOnInit(): void {
//     this.slideInterval = setInterval(() => {
//       this.currentPage++;

//       // When clone of Page 1 is reached
//       if (this.currentPage === this.displayPages.length - 1) {
//         this.resetTimeout = setTimeout(() => {
//           this.isResetting = true;
//           this.currentPage = 0;

//           // Re-enable transition after invisible reset
//           setTimeout(() => {
//             this.isResetting = false;
//           }, 50);
//         }, 800);
//       }
//     }, 3000);
//   }

//   ngOnDestroy(): void {
//     clearInterval(this.slideInterval);
//     clearTimeout(this.resetTimeout);
//   }
// }

// import { Component, OnDestroy, OnInit, signal } from '@angular/core';
// import { StrengthCardComponent } from '../strength-card/strength-card';

// @Component({
//   selector: 'app-strengths',
//   standalone: true,
//   imports: [StrengthCardComponent],
//   templateUrl: './strengths.html',
//   styleUrl: './strengths.scss',
// })
// export class StrengthsComponent implements OnInit, OnDestroy {
//   currentPage = signal(0);

//   private slideInterval!: ReturnType<typeof setInterval>;
//   private resetTimeout!: ReturnType<typeof setTimeout>;

//   pages = [
//     // ==========================
//     // PAGE 1 - 6 CARDS
//     // ==========================
//     [
//       {
//         icon: 'icons/layout 1.svg',
//         title: 'Wireframing',
//         level: 'Advanced',
//         progress: 85,
//       },
//       {
//         icon: 'icons/prototype 1.svg',
//         title: 'Prototyping',
//         level: 'Advanced',
//         progress: 82,
//       },
//       {
//         icon: 'icons/copywriting 1.svg',
//         title: 'User Research',
//         level: 'Proficient',
//         progress: 75,
//       },
//       {
//         icon: 'icons/people-flow 1.svg',
//         title: 'User Flows',
//         level: 'Advanced',
//         progress: 84,
//       },
//       {
//         icon: 'icons/page-optimization 1.svg',
//         title: 'Usability Testing',
//         level: 'Proficient',
//         progress: 72,
//       },
//       {
//         icon: 'icons/enterprise-architecture 1.svg',
//         title: 'Information Architecture',
//         level: 'Proficient',
//         progress: 76,
//       },
//     ],

//     // ==========================
//     // PAGE 2 - 8 CARDS
//     // ==========================
//     [
//       {
//         icon: 'images/dev 1 (1).png',
//         title: 'Dev Handoff',
//         level: 'Figma + Annotations',
//       },
//       {
//         icon: 'images/workflow-alt (3) 1 (1).png',
//         title: 'Agile Workflow',
//         level: 'Sprints + Standups',
//       },
//       {
//         icon: 'images/Group.png',
//         title: 'Jira',
//         level: 'Issue Tracking',
//       },
//       {
//         icon: 'images/trello 2 (1).png',
//         title: 'Trello',
//         level: 'Proficient',
//       },
//       {
//         icon: 'images/online-interview 1.png',
//         title: 'Stakeholder Interviews',
//         level: 'Requirements Gathering',
//       },
//       {
//         icon: 'images/Vector (34).png',
//         title: 'Design Documentation',
//         level: 'Specs + Guidelines',
//       },
//       {
//         icon: 'images/hands-together 1 (1).png',
//         title: 'Team Collaboration',
//         level: 'Cross-Functional Teams',
//       },
//       {
//         icon: 'images/person-presenting 1 (1).png',
//         title: 'Client Presentations',
//         level: 'Proposals + Demos',
//       },
//     ],

//     // ==========================
//     // PAGE 3 - 6 CARDS
//     // ==========================
//     [
//       {
//         icon: 'icons/website-image-search 1.svg',
//         title: 'Visual Design',
//         level: 'Advanced',
//         progress: 82,
//       },
//       {
//         icon: 'icons/webpage-list 1.svg',
//         title: 'Interaction Design',
//         level: 'Advanced',
//         progress: 86,
//       },
//       {
//         icon: 'icons/dashboard 1.svg',
//         title: 'Dashboard Systems',
//         level: 'Advanced',
//         progress: 88,
//       },
//       {
//         icon: 'icons/mobile 1.svg',
//         title: 'Mobile UI',
//         level: 'Proficient',
//         progress: 90,
//       },
//       {
//         icon: 'icons/responsive-design 1.svg',
//         title: 'Responsive Layouts',
//         level: 'Advanced',
//         progress: 82,
//       },
//       {
//         icon: 'icons/web-design 1.svg',
//         title: 'Interface Design',
//         level: 'Advanced',
//         progress: 86,
//       },
//     ],
//   ];

//   // First page clone for seamless loop
//   displayPages = [...this.pages, this.pages[0]];

//   ngOnInit(): void {
//     this.slideInterval = setInterval(() => {
//       const nextPage = this.currentPage() + 1;

//       this.currentPage.set(nextPage);

//       // After clone of first page, reset silently to real first page
//       if (nextPage === this.displayPages.length - 1) {
//         this.resetTimeout = setTimeout(() => {
//           this.currentPage.set(0);
//         }, 800);
//       }
//     }, 3000);
//   }

//   ngOnDestroy(): void {
//     clearInterval(this.slideInterval);
//     clearTimeout(this.resetTimeout);
//   }
// }

import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { StrengthCardComponent } from '../strength-card/strength-card';

@Component({
  selector: 'app-strengths',
  standalone: true,
  imports: [StrengthCardComponent],
  templateUrl: './strengths.html',
  styleUrl: './strengths.scss',
})
export class StrengthsComponent implements OnInit, OnDestroy {
  /*
   * We use a signal so Angular always updates the
   * slider position when the timer changes it.
   */

  currentPage = signal(2);
  isResetting = signal(false);

  private slideInterval!: ReturnType<typeof setInterval>;
  private resetTimeout!: ReturnType<typeof setTimeout>;

  /*
   * Reverse order is intentional.
   *
   * Index 2 = Page 1
   * Index 1 = Page 2
   * Index 0 = Page 3
   *
   * Decreasing currentPage makes the track move
   * visually from LEFT -> RIGHT.
   */
  displayPages = [
    // ==========================
    // PAGE 3 - 6 CARDS
    // ==========================
    [
      {
        icon: 'icons/website-image-search 1.svg',
        title: 'Visual Design',
        level: 'Advanced',
        progress: 82,
      },
      {
        icon: 'icons/webpage-list 1.svg',
        title: 'Interaction Design',
        level: 'Advanced',
        progress: 86,
      },
      {
        icon: 'icons/dashboard 1.svg',
        title: 'Dashboard Systems',
        level: 'Advanced',
        progress: 88,
      },
      {
        icon: 'icons/mobile 1.svg',
        title: 'Mobile UI',
        level: 'Proficient',
        progress: 90,
      },
      {
        icon: 'icons/responsive-design 1.svg',
        title: 'Responsive Layouts',
        level: 'Advanced',
        progress: 82,
      },
      {
        icon: 'icons/web-design 1.svg',
        title: 'Interface Design',
        level: 'Advanced',
        progress: 86,
      },
    ],

    // ==========================
    // PAGE 2 - 8 CARDS
    // ==========================
    [
      {
        icon: 'images/dev 1 (1).png',
        title: 'Dev Handoff',
        level: 'Figma + Annotations',
      },
      {
        icon: 'images/workflow-alt (3) 1 (1).png',
        title: 'Agile Workflow',
        level: 'Sprints + Standups',
      },
      {
        icon: 'images/Group.png',
        title: 'Jira',
        level: 'Issue Tracking',
      },
      {
        icon: 'images/trello 2 (1).png',
        title: 'Trello',
        level: 'Proficient',
      },
      {
        icon: 'images/online-interview 1.png',
        title: 'Stakeholder Interviews',
        level: 'Requirements Gathering',
      },
      {
        icon: 'images/Vector (34).png',
        title: 'Design Documentation',
        level: 'Specs + Guidelines',
      },
      {
        icon: 'images/hands-together 1 (1).png',
        title: 'Team Collaboration',
        level: 'Cross-Functional Teams',
      },
      {
        icon: 'images/person-presenting 1 (1).png',
        title: 'Client Presentations',
        level: 'Proposals + Demos',
      },
    ],

    // ==========================
    // PAGE 1 - 6 CARDS
    // ==========================
    [
      {
        icon: 'icons/layout 1.svg',
        title: 'Wireframing',
        level: 'Advanced',
        progress: 85,
      },
      {
        icon: 'icons/prototype 1.svg',
        title: 'Prototyping',
        level: 'Advanced',
        progress: 82,
      },
      {
        icon: 'icons/copywriting 1.svg',
        title: 'User Research',
        level: 'Proficient',
        progress: 75,
      },
      {
        icon: 'icons/people-flow 1.svg',
        title: 'User Flows',
        level: 'Advanced',
        progress: 84,
      },
      {
        icon: 'icons/page-optimization 1.svg',
        title: 'Usability Testing',
        level: 'Proficient',
        progress: 72,
      },
      {
        icon: 'icons/enterprise-architecture 1.svg',
        title: 'Information Architecture',
        level: 'Proficient',
        progress: 76,
      },
    ],
  ];

  ngOnInit(): void {
    /*
     * Start from index 2 = Page 1
     *
     * 2 -> 1 = Page 2
     * 1 -> 0 = Page 3
     * 0 -> reset to 2 = Page 1
     */

    this.slideInterval = setInterval(() => {
      const nextPage = this.currentPage() - 1;

      this.currentPage.set(nextPage);

      /*
       * Page 3 reached.
       * Wait for the 0.8s slide animation to finish,
       * then silently reset to Page 1.
       */
      if (nextPage === 0) {
        this.resetTimeout = setTimeout(() => {
          this.isResetting.set(true);

          this.currentPage.set(2);

          /*
           * Turn transition back on after reset.
           */
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.isResetting.set(false);
            });
          });
        }, 800);
      }
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
    clearTimeout(this.resetTimeout);
  }
}
