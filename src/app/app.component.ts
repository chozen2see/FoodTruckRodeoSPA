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

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken =
                this.jwtHelper.decodeToken(token);
      this.uniqueName = this.authService.decodedToken?.unique_name;
    }
  }

}
