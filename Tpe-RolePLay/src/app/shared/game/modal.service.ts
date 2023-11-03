import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public isWinModalVisible = false;

  showWinModal(player: string) {
    this.isWinModalVisible = true;
  }

  closeWinModal() {
    this.isWinModalVisible = false;
  }
}
