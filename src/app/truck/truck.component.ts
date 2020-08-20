import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.css'],
})
export class TruckComponent implements OnInit {
  // @Output() registerToggle = new EventEmitter();

  month: string;
  day: number;
  weekday: string;

  constructor() {}

  ngOnInit() {
    this.getEvent();
  }

  getEvent() {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    const today = new Date();
    this.month = monthNames[today.getMonth()];
    this.weekday = dayNames[today.getDay()];
    this.day = today.getDate();
  }

  // registerClick() {
  //   this.registerToggle.emit();
  // }
}
