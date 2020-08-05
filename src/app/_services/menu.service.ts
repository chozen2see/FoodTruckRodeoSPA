import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Menu } from '../_models/menu';

// add auth to headers (bearer / token) to send with get request
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
  }),
};

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // use environment variable so will not have to update the url after deployment to production
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMenus(foodTruckId: number): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.baseUrl + 'foodtrucks/' + foodTruckId + '/menus', httpOptions);
  }

  getMenu(
    foodTruckId: number,
    menuId: number
  ): Observable<Menu> {
    return this.http.get<Menu>(
      this.baseUrl + 'foodtrucks/' + foodTruckId + '/menus/' + menuId, httpOptions
    );
  }
}
