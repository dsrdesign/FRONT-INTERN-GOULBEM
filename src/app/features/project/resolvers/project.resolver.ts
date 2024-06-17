import { Injectable } from '@angular/core';
import {
     Router, Resolve,
     RouterStateSnapshot,
     ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { ProjectService } from '../services/project.service';

@Injectable()
export class ProjectResolver implements Resolve<boolean> {
     constructor(
          private _projectServices: ProjectService,
          private _router: Router,
     ) { }

     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {

          const idProject = route.params["idProject"];
          if (isNaN(idProject)) {
               console.log(`L'id du projet doit etre un entier : ${idProject} `);
               this._router.navigate(['/projet/all']);
               return of(null);
          }
          return this._projectServices.getOneProject(idProject).pipe(
               map(project => {
                    if (project) {
                         return project;
                    };
                    console.log(`Le projet n'a pas ete trouve : ${idProject}`);
                    this._router.navigate(['/projet/all']);
                    return of(null);

               }),
               catchError(error => {
                    console.log(`Oups une erreur : ${error}`);
                    this._router.navigate(['/projet/all']);
                    return of(error);
               })
          )
     }
}
