import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  day: number;
  month: number;
  year: number;

  hours = this.getRandomInt(100);
  minutes = this.getRandomInt(25);
  seconds = this.getRandomInt(25);
  showTimer = false;
  counter: { hrs: number, min: number, sec: number };

  constructor() {
  }

  getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max))
  }

  startTimer() {
    this.showTimer = true;
    this.counter = {hrs: this.hours, min: this.minutes, sec: this.seconds};
    const intervalId = setInterval(() => {

      if (this.counter.sec - 1 === -1) {
        if (this.counter.min > 0) {
          this.counter.min -= 1;
        }
        else if(this.counter.hrs >0){
          this.counter.hrs -=1;
          this.counter.min = 59;
        }
        this.counter.sec = 59;
      } else {
        this.counter.sec -= 1;
      }

      if (this.counter.hrs === 0 && this.counter.min === 0 && this.counter.sec === 0) {
        clearInterval(intervalId);
      }

    }, 1000);
  }

  ngOnInit(): void {
  }

  openTimer() {
    this.showTimer = true;
  }

}
