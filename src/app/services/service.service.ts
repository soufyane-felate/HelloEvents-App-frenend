import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private clientUrl = 'http://localhost:8080/api/client';
  private eventUrl = 'http://localhost:8080/api/event';
  private reservationUrl = 'http://localhost:8080/api/reservation';
  private registerUrl = 'http://localhost:8080/api/auth/signup';

  constructor(private http: HttpClient) {}

  // for client

  getClient(): Observable<any[]> {
    return this.http.get<any[]>(this.clientUrl);
  }
  creatClient(postData: any): Observable<any> {
    return this.http.get<any[]>(this.clientUrl);
  }
  getClientById(id: string): Observable<any> {
    return this.http.get<any>(`${this.clientUrl}/${id}`);
  }

  //for event
  getEvent(): Observable<any[]> {
    return this.http.get<any[]>(this.eventUrl);
  }
  creatEvent(postData: any): Observable<any> {
    return this.http.get<any[]>(this.eventUrl);
  }
  getEventById(id: string): Observable<any> {
    return this.http.get<any>(`${this.eventUrl}/${id}`);
  }
  
  //for register
 
  registerCreate(postData: any): Observable<any> {
    return this.http.get<any[]>(this.registerUrl);
  }
 
  
}
