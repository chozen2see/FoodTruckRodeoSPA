import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// use dependency injection inside Angular project
// to bring in HTTP client to use this to call API

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  // implements OnInit interface - lifecycle event

  // property that can accept any type of value
  values: any;

  // inject HttpClient to make calls to API BackEnd
  constructor(private http: HttpClient) { }

  // make call to API here
  ngOnInit() {
    this.getValues();
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

}
