import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

import { apiUrl } from 'src/environment/environment';

import { HttpClient } from '@angular/common/http';
import { IDetailIntern, IListInternsManager, Itache } from '../interfaces/intern.interface';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class InternService {


  private URL = apiUrl.baseUrl;

  constructor(
    private _http: HttpClient,
    private _toastr: ToastrService,
  ) { }

  // Add intern
  addIntern(value: any): Observable<any> {
    console.log("Success !");
    return this._http.post<any>(`${this.URL}/stagiaire/create`, value).pipe(
      catchError(err => {
        this._toastr.error(`${err.error.message}`)
        throw err; // Rethrow the error to propagate it further if needed
      }))
  };

  // Add intern
  upadteIntern(value: any, idStagiaire: number): Observable<any> {
    console.log("Success !");
    return this._http.put<any>(`${this.URL}/stagiaire/update?idStagiaire=${idStagiaire}`, value).pipe(
      catchError(err => {
        this._toastr.error(`${err.error.message}`)
        throw err; // Rethrow the error to propagate it further if needed
      }))
  };

  // Archived intern
  archivedIntern(idStagiaire: number): Observable<any> {
    console.log("Success !");
    return this._http.put<any>(`${this.URL}/stagiaire/archived?idStagiaire=${idStagiaire}`, {}).pipe(
      catchError(err => {
        this._toastr.error(`${err.error.message}`)
        throw err; // Rethrow the error to propagate it further if needed
      }))
  };

  // List of all interns by Manager
  listOfInternsByManager(): Observable<IListInternsManager> {
    return this._http.get<IListInternsManager>(`${this.URL}/stagiaire/allByResponsable`);
  };

  // Detail of an intern
  detailOfIntern(idStagiaire: number): Observable<IDetailIntern> {
    return this._http.get<IDetailIntern>(`${this.URL}/stagiaire/detail?idStagiaire=${idStagiaire}`);
  };

  // Detail of a Departement
  listOfDepartments(): Observable<IListInternsManager> {
    return this._http.get<IListInternsManager>(`${this.URL}/departement/all`);
  };

  // List of all Managers
  listOfManagers(): Observable<IListInternsManager> {
    return this._http.get<IListInternsManager>(`${this.URL}/responsable/all`);
  };

  // Add a new task
  public updateTask(value: any, idTache: number): Observable<Itache> {
    return this._http.put<Itache>(`${this.URL}/tache/update?idTache=${idTache}`, value).pipe(
      catchError(err => {
        this._toastr.error("Erreur oooh")
        throw err; // Rethrow the error to propagate it further if needed
      })
    )
  }

  // Delete task
  deleteTask(idTache: number) {
    return this._http.delete<any>(`${this.URL}/tache/delete?idTache=${idTache}`).pipe(
      catchError(err => {
        this._toastr.error("Erreur oooh")
        throw err; // Rethrow the error to propagate it further if needed
      })
    );
  }
}
