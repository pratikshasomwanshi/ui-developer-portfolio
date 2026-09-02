import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'NIRMAL HEALTH CARE CLINIC',
      titleColor: '#1768E5',
      icon: 'images/healthcare.png',
      type: 'Healthcare - Web',
      description1:
        'Nirmal Health Care is a modern homeopathy clinic website designed to simplify the appointment booking process and improve communication between patients and doctors.',
      description2:
        'The platform allows users to explore treatment information, book appointments online, select convenient time slots, and manage their healthcare journey from a single platform. The admin dashboard enables clinic staff to efficiently manage appointments, treatments, doctors, and patient records.',
      tags: ['Figma', 'Website Design', 'Wireframing', 'Responsive'],
      image: 'images/ZenBook Duo 14.png',
      link: 'https://www.behance.net/gallery/253659483/Nirmal-Health-Care-Clinc-Case-Study',
       liveUrl:'https://nirmalhealthcare.co.in/'
    },
    {
      title: 'SWAMI CAB',
      titleColor: '#F36B21',
      icon: 'images/cab.png',
      type: 'Mobile App - Transport',
      description1:
        'Swami Cab is a modern taxi booking application designed to provide users with a fast, reliable, and hassle-free transportation experience. The app enables customers to book rides for airport transfers, local rentals, outstation journeys, and corporate travel with just a few taps.',
      description2:
        'The focus of the design was to simplify the booking process while ensuring a clean, intuitive, and user-friendly interface for travelers.',
      tags: ['Figma', 'Mobile UI', 'UX Flows', 'App Design'],
      image: 'images/iPhone 16 Pro.png',
      link: 'https://www.behance.net/gallery/252681241/UI-UX-Case-Study-Swami-cab',
    },
    {
      title: 'BOOM CAD',
      titleColor: '#A8A8A8',
      icon: 'images/cad.png',
      type: 'Web-CAD',
      description1:
        'BoomCAD is a global community platform designed for engineers, architects, industrial designers, and CAD professionals to showcase, share, and discover 2D and 3D design work.',
      description2:
        'Inspired by platforms such as Behance and Dribbble, BoomCAD enables creators to build professional portfolios, upload CAD projects, connect with industry professionals, participate in design challenges, and receive feedback from the global engineering community.',
      tags: ['Figma', 'Website Design', 'Wireframing', 'Responsive'],
      image: 'images/iMac 24 inch.png',
      link:'https://www.behance.net/gallery/254127995/The-CAD-world-never-had-its-own-Behance'
    },
  ];
}
