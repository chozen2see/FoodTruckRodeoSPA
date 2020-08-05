import { Component, OnInit } from '@angular/core';
import { Menu } from '../_models/menu';
import { AlertifyService } from '../_services/alertify.service';
import { FoodTruckService } from '../_services/foodTruck.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {
  foodTruckId: number;
  menuId: number;
  menus: Menu[];
  lunch: Menu;

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
          if (menu.name === 'Lunch / Dinner') {
            this.lunch = menu;
            this.lunch.name = this.lunch.name.toLowerCase();
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
