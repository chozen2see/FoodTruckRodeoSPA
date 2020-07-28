import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // use INPUT similar to params. PROP being passed from parent
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
  }

  // this cancel method will emit the value false and pass it back up via the register component to the home component
  cancel() {
    this.cancelRegister.emit(false);
    console.log('Cancel registration.');
  }

}
