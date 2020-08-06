import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userId: number;
  user: User;
  userForm: any;
  model: any = {};

  constructor(
    private userService: UserService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    const nid = parseInt(localStorage.getItem('nid'));
    this.userId = nid ? nid : 7;
    this.userService.getUser(this.userId).subscribe(
      (user: User) => {
        this.user = user;
        // console.log(this.user);
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

  saveUser() {
    // if (this.userForm.dirty && this.userForm.valid) {
    //   alert(
    //     `Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`
    //   );
    // }
  }
}
