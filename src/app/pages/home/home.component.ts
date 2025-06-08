import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { trigger, style, animate, transition } from '@angular/animations';

import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardModule,
} from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { NgForOf } from '@angular/common';

interface Event {
  id: number;
  name: string;
  description: string;
  type: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
    MatChipSet,
    MatChip,
    MatCardFooter,
    NgForOf,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }
  ArrayEvents: Event[] = [];
}
