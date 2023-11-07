import { Component } from '@angular/core';
import { ModalService } from '../modal.service';
import { GameBoardComponent } from '../game-board/game-board.component';

@Component({
  selector: 'app-win-modal',
  templateUrl: './win-modal.component.html',
  styleUrls: ['./win-modal.component.scss']
})
export class WinModalComponent {
  constructor(public modalService: ModalService, public gameBoard: GameBoardComponent) { }

  isTie(): boolean {
    return this.gameBoard.isGameTied;
  }
  
  restartGame() {
    this.gameBoard.resetGame();
    this.modalService.closeWinModal();
  }
}
