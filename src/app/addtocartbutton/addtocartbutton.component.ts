import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Item } from '../_models/item';
import { CartService } from '../_services/cart.service';
import { CartItemDetail } from '../_models/cartitemdetail';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-addtocartbutton',
  templateUrl: './addtocartbutton.component.html',
  styleUrls: ['./addtocartbutton.component.scss']
})
export class AddtocartbuttonComponent implements OnInit {
  // use INPUT similar to params. PROP being passed from parent
  @Input() foodTruckId: number;
  @Input() item: Item;

  cartId: number;
  userId: number;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private alertify: AlertifyService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.cartId = parseInt(localStorage.getItem('cid'), 10) || 1;
    this.userId = parseInt(localStorage.getItem('nid'), 10) || 0;
  }

  // tslint:disable-next-line: typedef
  loggedIn() {
    return this.authService.loggedIn();
  }

  // tslint:disable-next-line: typedef
  addItemToCart(){
    const qty = 1;
    this.cartService.addCartItem(this.cartId, this.foodTruckId, this.userId, this.item, this.item.id, qty)
    .subscribe(
      (cartItemDetail: CartItemDetail) => {
        this.alertify.success(cartItemDetail.item.name + ' added to cart.');
        // console.log(cartItemDetail);
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

}
