import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navItems = [
    { label: 'home', link: 'home' },
    { label: 'reservation', link: 'reservation' },
    { label: 'client', link: 'client' },
    { label: 'event', link: 'event' },
  ];
}
