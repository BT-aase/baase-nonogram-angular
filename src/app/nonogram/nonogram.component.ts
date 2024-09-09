import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { puzzles } from '../../assets/puzzles';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-nonogram',
  templateUrl: './nonogram.component.html',
  styleUrls: ['./nonogram.component.css']
})

export class NonogramComponent implements OnInit {

  checked = true;
  action = 'fill';
  heartCount = 3;
  solved = false;

  id = '';
  size = 0;
  rowNums: string[] = [];
  colNums: string[] = [];
  currentGame: number[][] = [];
  solution: number[][] = [];
  filledBoxes = 0;

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setPuzzle();
    this.solved = false;
  }

  setPuzzle(): void {
    let puzzleId = parseInt(this.router.url.split('/')[2]);
    let puzzle = puzzles[puzzleId - 1];
    this.id = puzzle.id;
    this.size = puzzle.size;
    this.rowNums = puzzle.rowNums;
    this.colNums = puzzle.colNums;
    this.currentGame = this.createGrid(puzzle.size);
    this.solution = puzzle.solution;
    this.filledBoxes = puzzle.filledBoxes;
  }

  createGrid(size: number) {
    return Array.from(Array(size), () => {
      return new Array(size).fill(-1)
    })
  }

  changed() {
    if (this.checked === true) {
      this.action = 'fill';
    } else {
      this.action = 'cross';
    }
  }

  lifeLost(event: number) {
    this.heartCount = event;
    if (this.heartCount === 0) {
      this.openDialog('out')
    }
  }

  onSolved(event: boolean) {
    this.solved = event;
    setTimeout(() => this.openDialog('solved'), 3000);
    this.resetGame();
  }

  openDialog(status: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: status === 'out' ? '280px' : '190px',
      left: status === 'out' ? '240px' : '190px'
    };

    dialogConfig.data = status;

    let dialogRef = this.dialog.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => this.exitAction(data))
  };

  exitAction(data: string) {
    if (data === 'addLife') {
      this.heartCount = 1;
    } else {
      this.resetGame();

      if (data === 'continue' || data === 'back') {
        this.router.navigate(['']);
      }
    }
  }

  resetGame() {
    for (let j = 0; j < this.size; j++) {
      for (let k = 0; k < this.size; k++) {
        this.currentGame[j][k] = -1;
      }
    }

    this.heartCount = 3;
  }

}
