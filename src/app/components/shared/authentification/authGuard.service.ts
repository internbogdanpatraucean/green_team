import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../../../services/authentificationService/login-service.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: LoginService, public router: Router) {}

  canActivate(): boolean {
    if (!localStorage.getItem('user_token')) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
