import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserLogin } from '../interfaces/auth.interface';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _authService : AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isLoggedIn = this._authService.isAuth();

    if (isLoggedIn) {
         const user: IUserLogin = this._authService.currentUser
         req = req.clone({
              setHeaders: {
                   Authorization: `Bearer ${user.token}`
              },
              withCredentials: false
         })
    }

    return next.handle(req)
}
}
