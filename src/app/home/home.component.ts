import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// use dependency injection inside Angular project
// to bring in HTTP client to use this to call API

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // implements OnInit interface - lifecycle event

  registerMode = false;

  // inject HttpClient to make calls to API BackEnd
  constructor(private http: HttpClient) { }

  // make call to API here
  ngOnInit() {
  }

  // will set register mode to true
  registerToggle() {
    this.registerMode = true;
  }

  // used to set the register mode based on value OUTPUT from child component as $event in home.component.html
  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
