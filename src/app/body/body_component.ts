import { Component } from '@angular/core';
import {PUBLICATIONS} from '../../data/publications';
import {BLOGS} from '../../data/blogs';
import {Publication} from '../models/publication';
import {Blog} from '../models/blog';
import {BlogService} from '../services/blog.service';
import {PublicationsService} from '../services/publications.service';

@Component({
  selector: 'body-component',
  templateUrl: './body_component.html',
  styleUrls: ['./body_component.css']
})
export class BodyComponent {
  publications: Publication[];
  blogs: Blog[];

  constructor(
    private blogService: BlogService, 
    private publicationService: PublicationsService){}

  ngOnInit() {
    this.getBlogs();
    this.getPublications();
  }

  getBlogs(): void {
    this.blogService.getBlogs().subscribe(blogs => this.blogs = blogs);; 
  }
  
  getPublications(): void {
    this.publicationService.getPublications().subscribe(publications => this.publications = publications);; 
  }
}
