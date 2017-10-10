import { Component } from '@angular/core';

@Component({
  selector: 'blog-card',
  templateUrl: './blog_card.html',
  styleUrls: ['./blog_card.css']
})
export class BlogCard {
  heading: string;
  constructor(){
    this.heading = "Heading";
  }
  
}
