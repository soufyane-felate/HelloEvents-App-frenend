import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event',
  standalone:true,
  imports: [CommonModule,RouterLink, FormsModule,NgFor],
  
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  searchEvent = '';
  posts = [
    {
      id: 1,
      eventname: 'Tech Innovators Meetup',
      description: 'Discuss the future of AI, blockchain, and cloud computing.',
      type: 'Technology',
      reserved: false
    },
    {
      id: 2,
      eventname: 'Green Earth Expo',
      description: 'Focus on sustainability and green startups.',
      type: 'Environment',
      reserved: false
    }
  ];

  reserve(eventId: number) {
    const event = this.posts.find(p => p.id === eventId);
    if (event) {
      event.reserved = true;
     // alert(`You have reserved a spot for "${event.eventname}"`);
    }
  }

  get filteredPosts() {
    return this.posts.filter(post =>
      post.eventname.toLowerCase().includes(this.searchEvent.toLowerCase())
    );
  }
}
