import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, catchError, map, of } from "rxjs";
import { IDataDetailIntern } from "../../intern/interfaces/intern.interface";
import { InternService } from "../../intern/services/intern.service";

@Injectable()
export class ProfileInternResolver implements Resolve<boolean>{

     constructor(
          private _profileServices: InternService,
          private _router: Router,
     ) { }

     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDataDetailIntern> | any{

          const idIntern = route.queryParams["matriculeIntern"];
         
          return this._profileServices.detailOfIntern(idIntern).pipe(
               map(stagiaire => {
                    if(stagiaire){
                         return stagiaire;
                    }
                    console.log(`Le stagiaire n'a pas ete trouve : ${idIntern}`);
                    this._router.navigate(['/error'])
                    return of(null)
                    
               }),
               catchError(error => {
                    console.log(`Oups une erreur : ${error}`);
                    this._router.navigate(['/error']);
                    return of(error);
                })
          )
          

          return 
     }
}