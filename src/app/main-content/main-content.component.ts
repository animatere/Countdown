import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  hours = '23';
  minutes = '5';
  seconds = '25';
  showTimer = false;


  constructor() {
  }

  ngOnInit(): void {
  }

  openTimer() {
    this.showTimer = true;
  }

}
