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
  
  // property that can accept any type of value
  values: any;
  registerMode = false;

  // inject HttpClient to make calls to API BackEnd
  constructor(private http: HttpClient) { }

  // make call to API here
  ngOnInit() {
    this.getValues();
  }

  // will set register mode to true
  registerToggle() {
    this.registerMode = true;
  }

  getValues() {
    // supply route to API end point
    // get() - Constructs a GET request
    // interprets the body as a JSON object and returns an OBSERVABLE of the response body as a JSON object.
    // to get contents (stream of data from API) of OBSERVABLE must subscribe to it
    this.http.get('http://localhost:5000/api/values')
    .subscribe(response => {
      // when we get response back from server, store in values
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

  // used to set the register mode based on value OUTPUT from child component as $event in home.component.html
  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
