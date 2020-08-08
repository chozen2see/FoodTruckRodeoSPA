import { Component, OnInit } from '@angular/core';
import { Cart } from '../_models/cart';
import { AlertifyService } from '../_services/alertify.service';
import { CartService } from '../_services/cart.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  foodTruckId: number;
  cartId: number;
  userId: number;
  cart: Cart;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.foodTruckId = parseInt(localStorage.getItem('fid'));
    this.cartId = 1;
    this.userId = parseInt(localStorage.getItem('nid'));
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCart(this.cartId, this.foodTruckId, this.userId).subscribe(
      (cart: Cart) => {
        this.cart = cart;
        // console.log(cart);
      },
      (error) => {
        this.alertify.error(error);
      }
    );

    return 0;
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
}
