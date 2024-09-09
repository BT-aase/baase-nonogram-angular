import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input() heartCount = 0;
  @Input () solved = false;
  @Output() onBack = new EventEmitter<any>();

  fullHeart = '../../assets/fullHeart.png';
  emptyHeart = '../../assets/emptyHeart.png';

  firstHeart = '';
  secondHeart = '';
  thirdHeart = '';

  ngOnInit(): void {
    this.firstHeart = this.fullHeart; 
    this.secondHeart = this.fullHeart;
    this.thirdHeart = this.fullHeart;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes.heartCount !== 'undefined'){
      this.heartDisplay(changes.heartCount.currentValue)
    }
  }

  clickBack(){
    this.onBack.emit('back');
  }

  heartDisplay(heartCount: Number){
    if (heartCount === 0) {
      this.firstHeart = this.emptyHeart;
      this.secondHeart = this.emptyHeart;
      this.thirdHeart = this.emptyHeart;
    } else if (heartCount === 1) {
      this.firstHeart = this.fullHeart;
      this.secondHeart = this.emptyHeart;
      this.thirdHeart = this.emptyHeart;
    } else if (heartCount === 2) {
      this.thirdHeart = this.emptyHeart;
    } else if (heartCount === 3) {
      this.firstHeart = this.fullHeart;
      this.secondHeart = this.fullHeart;
      this.thirdHeart = this.fullHeart;
    }
  }

  constructor() { }

}
