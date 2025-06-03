import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogOutComponent } from './pages/log-out/log-out.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { EventComponent } from './pages/event/event.component';
import { ClientComponent } from './pages/client/client.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'loge-out', component: LogOutComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'event', component: EventComponent },
  { path: 'client', component: ClientComponent },
  { 
    path: 'register', 
    component: RegisterComponent,
    data: { animation: 'registerPage' } 
  },
  { 
    path: 'login', 
    component: LoginComponent,
    data: { animation: 'loginPage' } 
  },
];
