import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { error } from 'console';
import { UserStorageService } from '../../services/storage/user-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('pageFlip', [
      state('in', style({ transform: 'rotateY(0deg)', opacity: 1 })),
      transition(':enter', [
        style({ transform: 'rotateY(180deg)', opacity: 0 }),
        animate('600ms ease-out')
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'rotateY(-180deg)', opacity: 0 }))
      ])
    ]),
    trigger('inputFocus', [
      state('default', style({ transform: 'scale(1)', boxShadow: 'none' })),
      state('focused', style({ transform: 'scale(1.02)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' })),
      transition('default <=> focused', animate('200ms ease-in-out'))
    ])
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  passwordVisible = false;
  inputStates: { [key: string]: string } = {
    email: 'default',
    password: 'default'
  };
  isLeaving = false;

  constructor(private fb: FormBuilder,
    private authService:AuthService,
    private message:NzMessageService, 
    private router: Router) 
    {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }


  ngOnInit(){
    this.loginForm=this.fb.group({

      email:[null, [Validators.required,Validators.email]],
      password:[null,[Validators.required]]
    })

  }
submitForm() {
  this.authService.login(this.loginForm.value).subscribe(res=>{
    console.log(res);
     if(res.userId!=null){
      const user={
        id:res.userId,
        role:res.serRole
      }
      UserStorageService.saveUser(user);
      UserStorageService.saveToken(res.jwt);
     }

  },
error=>{
  this.message.error(
    `Bad credentials`,
    {nzDuration:5000}
  )
}
)
   
  }
 

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  setInputState(field: string, state: string) {
    this.inputStates[field] = state;
  }

  navigateToRegister() {
    this.isLeaving = true;
    setTimeout(() => {
      this.router.navigate(['/register']);
    }, 500);
  }
}