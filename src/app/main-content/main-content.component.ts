import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  hours = 1;
  minutes = 0;
  seconds = 3;
  showTimer = false;
  counter: { hours: number, min: number, sec: number };

  constructor() {
  }

  startTimer() {
    this.showTimer = true;
    this.counter = {hours: this.hours, min: this.minutes, sec: this.seconds};
    const intervalId = setInterval(() => {

      if (this.counter.sec - 1 === -1) {
        if (this.counter.min > 0) {
          this.counter.min -= 1;
        }
        this.counter.sec = 59;
      } else {
        this.counter.sec -= 1;
      }

      if (this.counter.hours === 0 && this.counter.min === 0 && this.counter.sec === 0) {
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
