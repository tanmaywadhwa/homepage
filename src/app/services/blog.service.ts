import { Injectable } from '@angular/core';
import { BLOGS } from '../../data/blogs';
import { Blog } from '../models/blog';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BlogService {

  constructor() { }

  getBlogs(): Observable<Blog[]> {
    return of(BLOGS);
  }

}
