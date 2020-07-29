import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  //  will hold username and password so we can pass to API
  model: any = {};
  uniqueName: string;
  @Input() uniqueNameFromApp: string;

  // inject required services
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.uniqueName = this.uniqueNameFromApp;
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
      this.uniqueName = this.authService.decodedToken.unique_name;
    }, error => {
      this.alertify.error(error); // 'Failed to log in.'
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out.');
  }
}


