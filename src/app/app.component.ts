import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { UserStorageService } from './services/storage/user-storage.service';
import { Router, NavigationEnd } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Hello_Event_FrentEbnd';
  isCustomerLoggedIn: boolean = UserStorageService.isCustomerLoggedIn();
  isAdminLoggedIn: boolean = UserStorageService.isAdminLoggedIn();

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isCustomerLoggedIn = UserStorageService.isCustomerLoggedIn();
        this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
      }
    });
  }

  logout(){
    UserStorageService.signOut();
    this.router.navigateByUrl('/')
  }
}
