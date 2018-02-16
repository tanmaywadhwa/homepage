import { Injectable } from '@angular/core';
import { PUBLICATIONS } from '../../data/publications';
import { Publication } from '../models/publication';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PublicationsService {

  constructor() { }

  getPublications(): Observable<Publication[]> {
    return of(PUBLICATIONS);
  }

}
