import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    
    private _auth: AuthService,
    private _router: Router,
    // private _toastr: ToastrService,
  ) {}

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (localStorage.getItem('isLoggedin')) {
  //     // logged in so return true
  //     return true;
  //   }

  //   // not logged in so redirect to login page with the return url
  //   this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
  //   return false;
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._auth.isAuth()) {
      return true;
    }
    // this._toastr.info("Veuillez vous connecter !");
    this._router.navigate(['/auth'], { queryParams: { return: state.url } });
    return false;
    
  }
}