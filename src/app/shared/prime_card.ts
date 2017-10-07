import { Component } from '@angular/core';

@Component({
  selector: 'prime-card',
  templateUrl: './prime_card.html',
  styleUrls: ['./prime_card.css']
})
export class PrimeCard {
  heading: string;
  constructor(){
    this.heading = "Heading";
  }
  
}
