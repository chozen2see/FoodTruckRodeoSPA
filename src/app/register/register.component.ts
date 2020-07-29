import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

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

  // inject required services
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
        this.alertify.success('Registration successful.');
    },
      error => { this.alertify.error(error); }
    );
  }

  // this cancel method will emit the value false and pass it back up via the register component to the home component
  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.message('Registration canceled.');
  }

}
