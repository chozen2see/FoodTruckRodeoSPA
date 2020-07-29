import { Component, OnInit } from '@angular/core';
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

  // inject required services
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error(error); // 'Failed to log in.'
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    // !! if something in token true otherwise false
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out.');
  }

}


