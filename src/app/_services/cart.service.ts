import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../_models/cart';
import { CartItemDetail } from '../_models/cartitemdetail';
import { Item } from '../_models/item';

// add auth to headers (bearer / token) to send with get request
const httpOptions = {
  headers: new HttpHeaders({
    // tslint:disable-next-line: object-literal-key-quotes
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // use environment variable so will not have to update the url after deployment to production
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCart(cartId: number, foodTruckId: number, userId: number): Observable<Cart> {
    return this.http.get<Cart>(
      this.baseUrl + 'carts/' + cartId + '/foodtruck/' + foodTruckId + '/user/' + userId
      // , httpOptions
    );
  }

  updateCart(
    cartId: number, item: CartItemDetail, itemId: number, newQty: number
  ): Observable<CartItemDetail> {
     return this.http.put<CartItemDetail>(
      this.baseUrl + 'carts/' + cartId + '/item/' + itemId + '/qty/' + newQty,
      item
      // http://localhost:5000/api/carts/1/item/50/qty/2
    );
  }

  addCartItem(
    cartId: number, foodTruckId: number, userId: number,
    item: Item, itemId: number, qty: number
  ): Observable<CartItemDetail> {
    return this.http.post<CartItemDetail>(
      this.baseUrl + 'carts/' + cartId + '/foodtruck/' + foodTruckId + '/user/' + userId + '/item/' + itemId + '/qty/' + qty,
     item
   );
  }

  removeItemFromCart(
    cartId: number, foodTruckId: number, userId: number, itemId: number
  ): Observable<Cart> {
    return this.http.delete<Cart>(
      this.baseUrl + 'carts/' + cartId + '/foodtruck/' + foodTruckId + '/user/' + userId + '/item/' + itemId
   );
  }

}
