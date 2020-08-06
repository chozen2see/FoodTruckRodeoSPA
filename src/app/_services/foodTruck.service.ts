import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodTruck } from '../_models/foodtruck';
import { Menu } from '../_models/menu';
import { Item } from '../_models/item';

// add auth to headers (bearer / token) to send with get request
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root',
})
export class FoodTruckService {
  // use environment variable so will not have to update the url after deployment to production
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // must be authorized - will change once select food truck page added
  getFoodTrucks(): Observable<FoodTruck[]> {
    return this.http.get<FoodTruck[]>(this.baseUrl + 'foodtrucks', httpOptions);
  }

  getFoodTruck(id: number): Observable<FoodTruck> {
    return this.http.get<FoodTruck>(
      this.baseUrl + 'foodtrucks/' + id
      // , httpOptions
    );
  }

  // refactor menu and item services
  getMenus(foodTruckId: number): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.baseUrl + 'foodtrucks/' + foodTruckId + '/menus'
    // , httpOptions
    );
  }

  // items are returned as a collection within the menu
  getMenu(
    foodTruckId: number,
    menuId: number
  ): Observable<Menu> {
    return this.http.get<Menu>(
      this.baseUrl + 'foodtrucks/' + foodTruckId + '/menus/' + menuId
      // , httpOptions
    );
  }

  // must be authorized to get individual item to add to cart
  getItem(
    foodTruckId: number,
    menuId: number,
    itemId: number
  ): Observable<Item> {
    return this.http.get<Item>(
      this.baseUrl + 'foodtrucks/' + foodTruckId + '/menus/' + menuId + '/items/' + itemId, httpOptions
    );
  }

}
