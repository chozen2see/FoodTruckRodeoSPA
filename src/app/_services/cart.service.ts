import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../_models/cart';

// add auth to headers (bearer / token) to send with get request
const httpOptions = {
  headers: new HttpHeaders({
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

}
