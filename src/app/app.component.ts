import { Component } from '@angular/core';

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
export class AppComponent { //js class w/ angular features
  // property interpolated into HTML
  title = 'Dating App';
}
