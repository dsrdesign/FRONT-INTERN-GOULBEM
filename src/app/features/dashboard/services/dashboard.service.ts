import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private URL = apiUrl.baseUrl

  constructor(private _http: HttpClient) { }

  getDashboard(): Observable<any>{
    return this._http.get<any>(`${this.URL}/dashboard`)
  }
}
