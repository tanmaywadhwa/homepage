import { Component } from '@angular/core';
import {PUBLICATIONS} from '../../data/publications';
import {BLOGS} from '../../data/blogs';
import {Publication} from '../models/publication';
import {Blog} from '../models/blog';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'body-component',
  templateUrl: './body_component.html',
  styleUrls: ['./body_component.css']
})
export class BodyComponent {
  publications: Publication[];
  blogs: Blog[];

  constructor(private blogService: BlogService){
    // this.blogs = BLOGS;
    // this.publications = PUBLICATIONS;
  }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogs = this.blogService.getBlogs(); 
  }
}
