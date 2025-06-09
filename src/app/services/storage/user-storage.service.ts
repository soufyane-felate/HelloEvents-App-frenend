import { Injectable } from '@angular/core';
import { window } from 'rxjs';

const TOKEN = 'token';
const USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }
  localStorage:any;
 

  static saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN,token);
  }
  
  static saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER,JSON.stringify(user));
   
  }

  static getToken(): string | null {
    const localStorage = this.localStorage;
    return localStorage ? localStorage.getItem(TOKEN) : null;
  }

  static getUser(): any {
    const localStorage = this.localStorage;
    const user = localStorage ? localStorage.getItem(USER) : null;
    return user ? JSON.parse(user) : null;
  }

  static getUserId(): any {
    const user = this.getUser();
    return user ? user.id : '';
  }

  static getUserRole(): any {
    const user = this.getUser();
    return user ? user.role : '';
  }

  static isAdminLoggedIn(): boolean {
    return !!this.getToken() && this.getUserRole() === 'ADMIN';
  }

  static isCustomerLoggedIn(): boolean {
    return !!this.getToken() && this.getUserRole() === 'CUSTOMER';
  }

  static signOut(): void {
    const localStorage = this.localStorage;
    if (localStorage) {
      localStorage.removeItem(TOKEN);
      localStorage.removeItem(USER);
    }
  }

  static clearStorage(): void {
    this.signOut();
  }
}