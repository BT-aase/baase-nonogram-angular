import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-gamegrid',
  templateUrl: './gamegrid.component.html',
  styleUrls: ['./gamegrid.component.css']
})
export class GamegridComponent implements OnInit {

  @Input() action: String = '';
  @Input() heartCount: number = 0;
  @Input() id = '';
  @Input() size = 0;
  @Input() solved = false;
  @Input() rowNums: String[] = [];
  @Input() colNums: String[] = [];
  @Input() currentGame: number[][] = [];
  @Input() solution: number[][] = [];
  @Input() filledBoxes: number = 0;
  @Output() onLifeLost = new EventEmitter<any>();
  @Output() onSolve = new EventEmitter<any>();

  rows: any[] = [];
  columns: any[] = [];
  filled: any[] = [];
  crossed: any[] = [];
  incorrect: any[] = [];
  imageURL = "";

  ngOnInit(): void {
    this.gridSetup(this.size)
    this.imageURL = `../../assets/puzzle${this.id}/puzzle${this.id}_image.png`;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes.heartCount !== 'undefined' && changes.heartCount.currentValue === 3) {
      this.filled = [];
      this.crossed = [];
    }
  }

  gridSetup(size: Number) {
    for (let i = 0; i < size; i++) {
      this.rows.push(i);
      this.columns.push(i);
    }
  }

  onClick(event: any) {
    let clickId = event.target.id.replace('content-', '');
    this.clickCheck(clickId, this.action)
  }

  clickCheck(id: String, action: String) {
    let rowId = parseInt(id.split('-')[0]);
    let colId = parseInt(id.split('-')[1]);
    if (action === 'fill' && !this.crossed.includes(id)) {
      if (this.solution[rowId][colId] === 0) {
        this.onWrongEntry(rowId, colId, action)
      } else {
        this.filled.push(id);
        this.currentGame[rowId][colId] = 1;
      }
    } else if (action === 'cross' && !this.filled.includes(id)) {
      if (this.solution[rowId][colId] === 1) {
        this.onWrongEntry(rowId, colId, action)
      } else {
        this.crossed.push(id);
        this.currentGame[rowId][colId] = 0;
      }
    }
    this.checkSolved();
  }

  onWrongEntry(rowId: number, colId: number, action: String) {
    this.onLifeLost.emit(this.heartCount - 1);
    let entryId = rowId + '-' + colId;
    this.incorrect.push(entryId);
    setTimeout(() => {
      this.incorrect.shift();
      action === 'fill' ? this.crossed.push(entryId) : this.filled.push(entryId);
    }, 1000);
  }

  filledOrIncorrectCheck(id: String) {
    if (this.filled.includes(id)) {
      return '#00003f';
    } else if (this.incorrect.includes(id)) {
      return '#ff6961';
    } else {
      return '#fff';
    }
  }

  crossedCheck(id: String) {
    if (this.crossed.includes(id)) {
      return 'X';
    } else {
      return '';
    }
  }

  colSolved(i: number) {
    let currColArr = [];
    let solvedColArr = [];

    for (let j = 0; j < this.currentGame.length; j++) {
      currColArr.push(this.currentGame[j][i])
      solvedColArr.push(this.solution[j][i])
    }

    let currCol = currColArr.filter(entry => entry === 1).length;
    let solvedCol = solvedColArr.filter(entry => entry === 1).length;
    if (currCol === solvedCol) {
      for (let c = 0; c < currColArr.length; c++) {
        if (currColArr[c] === -1) {
          this.crossed.push(`${c}-${i}`)
        }
      }
      return 'colNumsSolved';
    } else {
      return 'colNums';
    }
  }

  rowSolved(k: number) {
    let currRow = this.currentGame[k].filter(entry => entry === 1).length;
    let solvedRow = this.solution[k].filter(entry => entry === 1).length;
    if (currRow === solvedRow) {
      for (let r = 0; r < this.currentGame[k].length; r++) {
        if (this.currentGame[k][r] === -1) {
          this.crossed.push(`${k}-${r}`)
        }
      }
      return 'rowNumsSolved';
    } else {
      return 'rowNums';
    }
  }

  checkSolved() {
    let currentFill = 0;
    for (let l = 0; l < this.currentGame.length; l++) {
      let currRow = this.currentGame[l];
      currentFill += currRow.filter(entry => entry === 1).length;
    }

    if (currentFill === this.filledBoxes) {
      this.onSolve.emit(true)
    }
  }

  crossedStyle(size: Number) {
    if (size === 5) {
      return 'contentFive'
    } else if (size === 10) {
      return 'contentTen'
    } else {
      return 'contentFifteen'
    }
  }

  constructor() { }
}
