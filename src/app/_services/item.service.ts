import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Item } from '../_models/item';

// add auth to headers (bearer / token) to send with get request
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {
    // use environment variable so will not have to update the url after deployment to production
    baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

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
