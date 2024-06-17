import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environment/environment';
import { IUserLogin } from '../interfaces/auth.interface';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Observable, pipe, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = apiUrl.baseUrl
  private jwtHelper!: JwtHelperService

  get currentUser(): IUserLogin {
    return JSON.parse(localStorage.getItem('@USER')!)
  }

  constructor(
    private _http: HttpClient,
    private _toastr: ToastrService,
    private _router: Router


  ) {
    this.jwtHelper = new JwtHelperService();
  }

  isAuth(): boolean {
    const currentUser = this.currentUser;
    if (currentUser && currentUser.responsable && currentUser.token) {
      return !this.jwtHelper.isTokenExpired(currentUser.token);
    } else {
      // Gérer le cas où l'une des propriétés est indéfinie
      return false;
    }
  }

  login(nomUtilisateur: string, motDePasse: string): Observable<IUserLogin> {
    console.log("Request !");
    return this._http.post<IUserLogin>(`${this.URL}/auth/login`, { nomUtilisateur, motDePasse })
      .pipe(
        tap({
          next: (res: IUserLogin) => {
            if (res.statusCode = 200) {
              localStorage.setItem("@USER", JSON.stringify(res))
              console.log("LE RESPONSABLE : ", localStorage.getItem("@USER"));
              this._toastr.success(`Bienvenu ${res.responsable.nomUtilisateur} !`, "Connecté !")
              this._router.navigate(['/']);
            }
          },
          error: (err: any) => {
            localStorage.clear(),
              this._toastr.error(`Indentifinat incorrecte !`, `${err.error.error}`)
            console.log("");
              
          }
        })
      )
  }
}
