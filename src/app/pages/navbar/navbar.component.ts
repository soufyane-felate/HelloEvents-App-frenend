import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserStorageService } from '../../services/storage/user-storage.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Output() onLogout = new EventEmitter<void>();
 // isAdminLoggedIn: boolean = false;
  //isCustomerLoggedIn: boolean = false;

  //private authSubscription: Subscription;

  constructor(private router: Router, private userStorageService: UserStorageService) {}

  navItems = [
    { label: 'Home', link: '/home' },
    { label: 'Reservation', link: '/reservation' },
    { label: 'Client', link: '/client' },
    { label: 'Event', link: '/event' },
    { label: 'profile', link: '/profile' },
  ];
  
  adminNavItems = [
    { label: 'Dashboard', link: '/admin/dashboard' },
    { label: 'Manage Events', link: '/admin/events' },
    { label: 'Manage Users', link: '/admin/users' },
    { label: 'profile', link: '/profile' },
    { label: 'profile', link: '/profile' },
  ];
  
  customerNavItems = [
    { label: 'My Profile', link: '/customer/profile' },
    { label: 'My Reservations', link: '/customer/reservations' },
    { label: 'Browse Events', link: '/customer/events' },
    { label: 'profile', link: '/profile' },
  ];
 isAdminLoggedIn :boolean= UserStorageService.isAdminLoggedIn();
isCustomerLoggedIn :boolean= UserStorageService.isCustomerLoggedIn();

  ngOnInit() {
   
   

    this.router.events.subscribe(event => {
      if (event.constructor.name=="NavigationEnd") {
        this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
        this.isCustomerLoggedIn = UserStorageService.isCustomerLoggedIn();
      }
    });
  }

  logout(){
    UserStorageService.signOut();
    this.router.navigateByUrl('/')
  }


}