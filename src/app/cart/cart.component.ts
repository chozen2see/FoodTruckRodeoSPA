import { Component, OnInit } from '@angular/core';
import { Cart } from '../_models/cart';
import { AlertifyService } from '../_services/alertify.service';
import { CartService } from '../_services/cart.service';
import { AuthService } from '../_services/auth.service';
import { CartItemDetail } from '../_models/cartitemdetail';

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
  item: CartItemDetail;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private alertify: AlertifyService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.foodTruckId = parseInt(localStorage.getItem('fid'), 10);
    this.cartId = parseInt(localStorage.getItem('cid'), 10);
    this.userId = parseInt(localStorage.getItem('nid'), 10);
    this.loadCart();
  }

  // tslint:disable-next-line: typedef
  loggedIn() {
    return this.authService.loggedIn();
  }

  // tslint:disable-next-line: typedef
  loadCart() {
    this.cartService.getCart(this.cartId, this.foodTruckId, this.userId).subscribe(
      (cart: Cart) => {
        cart.total  = parseFloat(cart.total.toFixed(2));
        this.cart = cart;
        // console.log(cart);
      },
      (error) => {
        this.alertify.error(error);
      }
    );

    return 0;
  }

  // tslint:disable-next-line: typedef
  increaseQty(item, itemId, qty) {
    const newQty = qty + 1;
    this.cartService.updateCart(this.cartId, item, itemId, newQty)
    .subscribe(
      (cartItemDetail: CartItemDetail) => {
        this.item = cartItemDetail;
        this.loadCart();
        // console.log(cartItemDetail);
      },
      (error) => {
        this.alertify.error(error);
      }
    );

    return 0;
  }

  // tslint:disable-next-line: typedef
  decreaseQty(item, itemId, qty) {
    const newQty = qty === 0 ? 0 : qty - 1;
    console.log(newQty);
    this.cartService.updateCart(this.cartId, item, itemId, newQty)
    .subscribe(
      (cartItemDetail: CartItemDetail) => {
        this.item = cartItemDetail;
        this.loadCart();
        // console.log(cartItemDetail);
      },
      (error) => {
        this.alertify.error(error);
      }
    );

    return 0;
  }

  // tslint:disable-next-line: typedef
  deleteItem(itemId: number){
    this.cartService.removeItemFromCart(this.cartId, this.foodTruckId, this.userId, itemId)
    .subscribe(
      (cart: Cart) => {
        this.cart = cart;
        this.loadCart();
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }
}
