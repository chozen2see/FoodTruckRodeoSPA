import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.css']
})
export class TruckComponent implements OnInit {
  // @Output() registerToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // registerClick() {
  //   this.registerToggle.emit();
  // }
}
