import { Component } from '@angular/core';
import {PUBLICATIONS} from '../../data/publications';
import {Publication} from '../models/publication';

@Component({
  selector: 'body-component',
  templateUrl: './body_component.html',
  styleUrls: ['./body_component.css']
})
export class BodyComponent {
  publications: Publication[];

  constructor(){
    this.publications = PUBLICATIONS;
  }
}
