import { Component, OnInit } from '@angular/core';
import { Menu } from '../_models/menu';
import { AlertifyService } from '../_services/alertify.service';
import { FoodTruckService } from '../_services/foodTruck.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css'],
})
export class BreakfastComponent implements OnInit {
  foodTruckId: number;
  menuId: number;
  menus: Menu[];
  breakfast: Menu;

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
          if (menu.name === 'Breakfast') {
            this.breakfast = menu;
            this.breakfast.name = this.breakfast.name.toLowerCase();
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
