import { Component,Input } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'blog-card',
  templateUrl: './blog_card.html',
  styleUrls: ['./blog_card.css']
})
export class BlogCard {
  @Input() blog: Blog; 
}
