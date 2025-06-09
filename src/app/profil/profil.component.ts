import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserStorageService } from '../services/storage/user-storage.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit {

  user: any = {};
  isEditing: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    this.user = UserStorageService.getUser();
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveProfile(): void {
   
    this.isEditing = false;
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.loadUser(); 
  }

  logout(): void {
    UserStorageService.signOut();
    this.router.navigateByUrl('/login');
  }
}
