import { Component } from '@angular/core';

@Component({
  selector: 'publication-card',
  templateUrl: './publication_card.html',
  styleUrls: ['./publication_card.css']
})
export class PublicationCard {
  heading: string;
  constructor(){
    this.heading = "Heading";
  }
  
}
