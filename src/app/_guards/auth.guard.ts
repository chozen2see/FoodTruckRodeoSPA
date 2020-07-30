import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { timestamp } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  // inject required services
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  canActivate(): boolean {
    // route is accessible if user is logged in
    if (this.authService.loggedIn()) {
      return true;
    }

    // if not logged in show error and navigate to main page
    this.alertify.error('Unauthorized!');
    this.router.navigate(['/']);
    return false;
  }
}
