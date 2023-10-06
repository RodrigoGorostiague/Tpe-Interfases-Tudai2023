import { Component } from '@angular/core';

@Component({
  selector: 'app-game-tab',
  templateUrl: './game-tab.component.html',
  styleUrls: ['./game-tab.component.scss']
})
export class GameTabComponent {
  isModalVisible = false;

  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
}
