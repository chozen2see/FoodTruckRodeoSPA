import { Component, OnInit } from '@angular/core';
import { Menu } from '../_models/menu';
import { AlertifyService } from '../_services/alertify.service';
import { FoodTruckService } from '../_services/foodTruck.service';

@Component({
  selector: 'app-sides',
  templateUrl: './sides.component.html',
  styleUrls: ['./sides.component.css']
})
export class SidesComponent implements OnInit {
  foodTruckId: number;
  menuId: number;
  menus: Menu[];
  side: Menu;

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
          if (menu.name === 'Side Items') {
            this.side = menu;
            this.side.name = this.side.name.toLowerCase();
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
