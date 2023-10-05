import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() price: number = 0;

  get finalPrice(): string {
    return this.price === 0 ? 'Gratis' : `$${this.price}`;
  }
}
