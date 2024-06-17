import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { apiUrl } from 'src/environment/environment';
import { IListInternsManager } from '../../intern/interfaces/intern.interface';
import { IListOfProject } from '../interfaces/project.interface';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ProjectService {

  private URL = apiUrl.baseUrl

  constructor(
    private _http: HttpClient,
    private _toastr: ToastrService,
  ) { }

  // Add a new project
  public addProject(value: any) {
    return this._http.post<any>(`${this.URL}/projet/create`, value).pipe(
      catchError(err => {
        this._toastr.error("Erreur oooh")
        throw err; // Rethrow the error to propagate it further if needed
      }))
  }

  // Add a new project
  public updateProject(value: any, idProjet: number) {
    return this._http.put<any>(`${this.URL}/projet/update?idProjet=${idProjet}`, value).pipe(
      catchError(err => {
        this._toastr.error("Erreur oooh")
        throw err; // Rethrow the error to propagate it further if needed
      }))
  }

  // Add a new task
  public addTask(value: any, idProjet: number) {
    return this._http.post<any>(`${this.URL}/tache/create?idProjet=${idProjet}&idStagiaire=${parseInt(`${value.idStagiaire}`)}`, value).pipe(
      catchError(err => {
        this._toastr.error("Erreur oooh")
        throw err; // Rethrow the error to propagate it further if needed
      }))
  }

  // List of all projects
  public listOfProjects(): Observable<IListOfProject> {
    return this._http.get<IListOfProject>(`${this.URL}/projet/all`);
  }

  // List of all interns
  public listOfInterns(): Observable<IListInternsManager> {
    return this._http.get<IListInternsManager>(`${this.URL}/stagiaire/all`);
  }

  // Detail of a project
  public getOneProject(idProjet: number): Observable<any> {
    return this._http.get<any>(`${apiUrl.baseUrl}/projet/${idProjet}`);
  }
}
