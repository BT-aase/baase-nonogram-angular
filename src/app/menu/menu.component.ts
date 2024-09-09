import { Component, OnInit } from '@angular/core';
import { puzzles } from '../../assets/puzzles';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  puzzles = puzzles;

  constructor() { }

  ngOnInit(): void {
  }

}
