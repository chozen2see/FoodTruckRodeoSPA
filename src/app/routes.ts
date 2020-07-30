import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

// MAIN COMPONENTS
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TruckComponent } from './truck/truck.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

// MENU COMPONENTS
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { MealsComponent } from './meals/meals.component';
import { SidesComponent } from './sides/sides.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { DessertsComponent } from './desserts/desserts.component';
import { SpecialsComponent } from './specials/specials.component';


export const appRoutes: Routes = [
  // Routes in an array of route configurations.
  // FIRST ROUTE WINS SYSTEM - ORDER IS IMPORTANT
  // Each having:
  // path - string that uses route matcher DSL
  // component - component type
  // redirectTo - url fragment which will replace the current matched segment

  // main routes
  { path: '', component: SpecialsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'find', component: TruckComponent },
  { path: 'contact', component: ContactComponent },

  // menu routes
  { path: 'menu/breakfast', component: BreakfastComponent },
  { path: 'menu/lunch', component: LunchComponent },
  { path: 'menu/meals', component: MealsComponent },
  { path: 'menu/sides', component: SidesComponent },
  { path: 'menu/beverages', component: BeveragesComponent },
  { path: 'menu/desserts', component: DessertsComponent },

  // must be logged in to access these components
  { // use single auth guard to protect all child routes
    path: '',
    // component: SpecialsComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'cart', component: CartComponent},
      { path: 'checkout', component: CheckoutComponent },
    ]
  },

  // individually guarded routes would look like this
    // { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
    // { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },

  // catch all route
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
