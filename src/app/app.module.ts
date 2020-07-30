// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';


// SERVICES
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { FooterComponent } from './footer/footer.component';
import { SpecialsComponent } from './specials/specials.component';
import { TruckComponent } from './truck/truck.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { MealsComponent } from './meals/meals.component';
import { SidesComponent } from './sides/sides.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { DessertsComponent } from './desserts/desserts.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

// must have at least one file decorated w @NgModule
// services get added to providers array

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      FooterComponent,
      SpecialsComponent,
      TruckComponent,
      BreakfastComponent,
      LunchComponent,
      MealsComponent,
      SidesComponent,
      BeveragesComponent,
      DessertsComponent,
      AboutComponent,
      ContactComponent,
      CartComponent,
      CheckoutComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
