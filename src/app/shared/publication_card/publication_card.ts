import { Component, Input } from '@angular/core';
import { Publication} from '../../models/publication';

@Component({
  selector: 'publication-card',
  templateUrl: './publication_card.html',
  styleUrls: ['./publication_card.css']
})
export class PublicationCard {
  @Input() publication: Publication;
}
