import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminRoleGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.authService.isLoggedIn && this.authService.roles.find((role) => role === 'ADMIN_ROLE'))) {
      return true;
    } else {
      this.router.navigate(['/error']);
      return false;
    }
  }
}
