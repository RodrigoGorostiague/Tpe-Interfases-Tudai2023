import { Component, Input } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent {
  @Input() connectN: number;
  currentPlayer: string = 'Massa';
  player1Ficha: string = 'Massa';
  player2Ficha: string = 'Milei';

  board: string[][] = [];
  private isGameOver: boolean = false;
  rows: number[] = [];
  cols: number[] = [];

  isGameTied: boolean = false;

  constructor(private modalService: ModalService) {
    this.connectN = 4;
    this.calculateRowsAndCols();
    this.initializeBoard(6, 8);
  }

  private calculateRowsAndCols(): void {
    const rowsForConnectN = [4, 5, 6, 7];
    const colsForConnectN = [6, 8, 10, 12];
    const index = this.connectN - 3;
    this.rows = Array(rowsForConnectN[index]).fill(0);
    this.cols = Array(colsForConnectN[index]).fill(0);
  }
  handleGameMode(event: any): void {
    const selectedOption = event.target.value;
    const [rows, cols] = selectedOption.split('x').map(Number);

    this.rows = Array(rows).fill(0);
    this.cols = Array(cols).fill(0);
    this.initializeBoard(rows, cols);
    this.connectN = rows - 1;
  }

  initializeBoard(rows: number, columns: number): void {
    this.board = Array(rows).fill(null).map(() => Array(columns).fill(''));
  }

  dropPiece(column: number): void {
    if (this.isGameOver || this.isGameTied) {
      return;
    }
    
    const row = this.findAvailableRow(column);

    if (row === -1) {
      return;
    }
    this.board[row][column] = this.currentPlayer;

    if (this.checkForWin(row, column)) {
      this.isGameOver = true;
    } else {
      this.currentPlayer = this.currentPlayer === this.player1Ficha ? this.player2Ficha : this.player1Ficha;
    }
    this.checkForTie(); 
  }
  findAvailableRow(column: number): number {
    for (let row = this.rows.length - 1; row >= 0; row--) {
      if (this.board[row][column] === '') {
        return row;
      }
    }
    return -1;
  }

  checkForWin(row: number, col: number): boolean {
    const directions = [
      [0, -1], [0, 1], // horizontal
      [-1, 0], [1, 0], // vertical
      [-1, -1], [1, 1], // diagonal asc
      [-1, 1], [1, -1] // diagonal desc
    ];

    const player = this.board[row][col];

    for (let dir of directions) {
      const count = this.countInDirection(row, col, dir[0], dir[1], player) +
        this.countInDirection(row, col, -dir[0], -dir[1], player) + 1;
      if (count >= this.connectN) {
        this.showWinModal(player);
        return true;
      }
    }
    let hasEmptyCells = this.board.some(row => row.some(cell => cell === ''));
    if (!hasEmptyCells) {
      this.showTieModal();
      return true;
    }

    return false;
  }

  checkForTie(): void {
    let totalMoves = 0;
    for (let i = 0; i < this.rows.length; i++) {
      for (let j = 0; j < this.cols.length; j++) {
        if (this.board[i][j] !== '') {
          totalMoves++;
        }
      }
    }

    // El juego está empatado si se han realizado todos los movimientos posibles y no hay un ganador.
    if (totalMoves === this.rows.length * this.cols.length && !this.isGameOver) {
      this.isGameTied = true;
    }
  }

  showTieModal(): void {
    this.modalService.showWinModal('Empate');
  }

  countInDirection(row: number, col: number, rowDir: number, colDir: number, player: string): number {
    let count = 0;
    let r = row + rowDir;
    let c = col + colDir;

    while (r >= 0 && r < this.rows.length && c >= 0 && c < this.cols.length && this.board[r][c] === player) {
      count++;
      r += rowDir;
      c += colDir;
    }

    return count;
  }

  showWinModal(player: string): void {
    this.modalService.showWinModal(player);
  }

  resetGame(): void {
    this.currentPlayer = 'Massa';
    this.isGameOver = false;

    const selectedOption = `${this.rows.length}x${this.cols.length}`;
    this.handleGameMode({ target: { value: selectedOption } });
  }

}
