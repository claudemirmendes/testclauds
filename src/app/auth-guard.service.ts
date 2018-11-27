
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()

export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
      const token_auth = localStorage.getItem('token_auth');
    if (token_auth == undefined) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}