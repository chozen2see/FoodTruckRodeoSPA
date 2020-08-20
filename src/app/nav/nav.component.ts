import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  //  will hold username and password so we can pass to API
  model: any = {};
  userId: number;
  uniqueName: string;
  @Input() uniqueNameFromApp: string;

  // inject required services
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private cartService: CartService,
    // for using routing in code
    private router: Router
  ) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.uniqueName = this.uniqueNameFromApp;
    this.userId = 0;
  }

  // tslint:disable-next-line: typedef
  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.alertify.success('Logged in successfully');
        this.uniqueName = this.authService.decodedToken.unique_name;
        this.userId = parseInt(this.authService.decodedToken.nameid, 10);
        localStorage.setItem('nid', this.authService.decodedToken.nameid);

        // check to see if user has a cart saved
        const cartId = parseInt(localStorage.getItem('cid'), 10) || 0;

        // if not create one for this food truck
        if (cartId === undefined || isNaN(cartId) || cartId === 0) {
          const foodTruckId = parseInt(localStorage.getItem('fid'), 10);
          this.cartService.getCart(cartId, foodTruckId, this.userId)
          .subscribe(
            (cart) => {
              localStorage.setItem('cid', cart.id.toString());
            },
            (error) => {
              this.alertify.error(error); // 'Failed to log in.'
            }
          );
        }
      },
      (error) => {
        this.alertify.error(error); // 'Failed to log in.'
      }
    );
  }

  // tslint:disable-next-line: typedef
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('nid');
    localStorage.removeItem('cid');
    this.router.navigate(['/']);
    this.alertify.message('Logged out.');
  }

  // tslint:disable-next-line: typedef
  loggedIn() {
    return this.authService.loggedIn();
  }
}
