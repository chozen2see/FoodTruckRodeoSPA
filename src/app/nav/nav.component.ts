import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  //  will hold username and password so we can pass to API
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
      console.log(error); // 'Failed to log in.'
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    // !! if something in token true otherwise false
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged out.');
  }

}


