import { Component, OnInit } from '@angular/core';
import { Menu } from '../_models/menu';
import { AlertifyService } from '../_services/alertify.service';
import { FoodTruckService } from '../_services/foodTruck.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {
  foodTruckId: number;
  menuId: number;
  menus: Menu[];
  dessert: Menu;

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
          if (menu.name === 'Desserts') {
            this.dessert = menu;
            this.dessert.name = this.dessert.name.toLowerCase();
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
