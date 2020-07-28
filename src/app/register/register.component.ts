import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // use INPUT similar to params. PROP being passed from parent
  // use OUTPUT to emit event (cancelRegister) back to parent
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(
      () => { console.log('Registration successful.');
    },
      error => { console.log(error); }
    );
  }

  // this cancel method will emit the value false and pass it back up via the register component to the home component
  cancel() {
    this.cancelRegister.emit(false);
    console.log('Cancel registration.');
  }

}
