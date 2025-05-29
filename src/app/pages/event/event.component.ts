import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormControl, FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    CommonModule,RouterLink,FormsModule
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent  {
  constructor(private service:ServiceService){}
  posts:any[]=[];
  searchEvent='';
  ngOnInit():void{
   this.service.getEvent().subscribe((data)=>{
    this.posts=data;
   })
  }


}
