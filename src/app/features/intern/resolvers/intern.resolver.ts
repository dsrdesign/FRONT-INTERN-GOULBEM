import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { InternService } from '../services/intern.service';

@Injectable()
export class InternResolver implements Resolve<boolean> {

  constructor(
    private _internServices: InternService,
    private _router: Router,
  ) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any{
    const idIntern = route.queryParams["matriculeIntern"];
         
          return this._internServices.detailOfIntern(idIntern).pipe(
               map(project => {
                    if (project) {
                         return project;
                    };
                    console.log(`Le stagiaire n'a pas ete trouve : ${idIntern}`);
                    this._router.navigate(['/intern/all']);
                    return of(null);

               }),
               catchError(error => {
                    console.log(`Oups une erreur : ${error}`);
                    this._router.navigate(['/stagiaire/all']);
                    return of(error);
               })
          )
  }
}
