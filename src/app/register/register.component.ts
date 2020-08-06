import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // use INPUT similar to params. PROP being passed from parent
  // use OUTPUT to emit event (cancelRegister) back to parent
  @Output() cancelRegister = new EventEmitter();

  model: any = {};
  registerForm: FormGroup;

  // inject required services
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    // used for reactive forms
    this.registerForm = new FormGroup({
      Name: new FormControl(),
      Username: new FormControl('', Validators.required),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8),
      ]),
      confirmPassword: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email]),
      PhoneNumber: new FormControl(
        ''
        // ,
        // [Validators.required, 
          // Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
        // ]
      ),
    }, this.passwordMatchValidator);
  }

  passwordMatchValidator(fg: FormGroup) {
    return fg.get('Password').value === fg.get('confirmPassword').value ? null : {'mismatch': true};
  }

  register() {
    this.authService.register(this.registerForm.value).subscribe(() => {
        this.alertify.success('Registration successful.');
        this.cancelRegister.emit(false);
    },
      error => { this.alertify.error(error); }
    );

    console.log(this.registerForm.value);
  }

  // this cancel method will emit the value false and pass it back up via the register component to the home component
  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.message('Registration canceled.');
  }
}
