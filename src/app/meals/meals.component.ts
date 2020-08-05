import { Component, OnInit } from '@angular/core';
import { Menu } from '../_models/menu';
import { AlertifyService } from '../_services/alertify.service';
import { FoodTruckService } from '../_services/foodTruck.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  foodTruckId: number;
  menuId: number;
  menus: Menu[];
  meals: Menu;

  constructor(
    private foodTruckService: FoodTruckService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.foodTruckId = parseInt(localStorage.getItem('foodTruckId'));
    this.loadMenu();
  }

  loadMenu() {
    this.foodTruckService.getMenus(this.foodTruckId).subscribe(
      (menus: Menu[]) => {
        this.menus = menus;
        this.menus.forEach((menu) => {
          if (menu.name === 'Meals / Platters') {
            this.meals = menu;
            this.meals.name = this.meals.name.toLowerCase();
          }
        });
      },
      (error) => {
        this.alertify.error(error);
      }
    );

    return 0;
  }
}
