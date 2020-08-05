import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

// root component being bootstrapped by App Module Component
// responsible for providing data for views

// decorated w @Component from Angular Core
// TypeScript uses decorator to give component angular features

@Component({ // decorator of a component

  // selector inside component template to show other components
  selector: 'app-root',

  // view of component:
  templateUrl: './app.component.html',

  // styles for component
  styleUrls: ['./app.component.css']
})

// component Angular class that provides data for view (templateURL)
export class AppComponent implements OnInit {
  // js class w/ angular features
  uniqueName: string;
  // authO helper service
  jwtHelper = new JwtHelperService();
  // foodTruckId
  foodTruckId: number;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // check to see if user already logged in
    const token = localStorage.getItem('token');

    // if so, decode token and set unique name
    if (token) {
      this.authService.decodedToken =
                this.jwtHelper.decodeToken(token);
      this.uniqueName = this.authService.decodedToken?.unique_name;
    }

    // check to see if foodTruckId has been saved
    const id = parseInt(localStorage.getItem('fid'));

    // if not set it to 1 - Rolling Soul
    if (id === undefined || isNaN(id)) {
      this.foodTruckId = 1;
      localStorage.setItem('fid', '1');
    }

  }

}
