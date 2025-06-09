import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserStorageService } from '../storage/user-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginRequest: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/login', loginRequest).pipe(
      tap(response => {
        if (response && response.token && response.user) {
          UserStorageService.saveToken(response.token);
          UserStorageService.saveUser(response.user);
         // UserStorageService.updateAuthState();
        }
      })
    );
  }

  register(signupRequest: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/signup', signupRequest);
  }
}