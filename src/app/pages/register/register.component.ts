import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { emit } from 'node:process';
import { AuthService } from '../../services/auth/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('pageFlip', [
      state('in', style({ transform: 'rotateY(0deg)', opacity: 1 })),
      transition(':enter', [
        style({ transform: 'rotateY(-180deg)', opacity: 0 }),
        animate('600ms ease-out')
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'rotateY(180deg)', opacity: 0 }))
      ])
    ]),
    trigger('inputFocus', [
      state('default', style({ transform: 'scale(1)', boxShadow: 'none' })),
      state('focused', style({ transform: 'scale(1.02)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' })),
      transition('default <=> focused', animate('200ms ease-in-out'))
    ])
  ]
})
export class RegisterComponent  {
  registerForm: FormGroup;
  passwordVisible = false;
  inputStates: { [key: string]: string } = {
    name: 'default',
    email: 'default',
    password: 'default'
  };
  isLeaving = false;

  constructor(private fb: FormBuilder,
     private router: Router,
     private authSevice:AuthService,
     private message:NzMessageService
    ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form submitted:', this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  setInputState(field: string, state: string) {
    this.inputStates[field] = state;
  }

  navigateToLogin() {
    this.isLeaving = true;
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 500);
  }



  ngOnInit(){
    this.registerForm=this.fb.group({
      email:[null,[Validators.email,Validators.required]],
      name:[null,Validators.required],
      password:[null,Validators.required]
    })
  }
  submitForm(){
    this.authSevice.register(this.registerForm.value).subscribe(res=>{
      if(res.id!=null){
        this.message.success("Signup successful",{nzDuration:5000});
        this.router.navigateByUrl("/");
      }else{
        this.message.error(`${res.message}`,{nzDuration:5000})
      }
    })

  }
}