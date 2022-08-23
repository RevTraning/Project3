import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApptForm } from '../models/apptForm';

@Injectable({
  providedIn: 'root'
})
export class ApptFormService {
  url: string = 'http://localhost:8081/';
  constructor(private http: HttpClient, private router: Router) { }

  addApptForm(apptForm: ApptForm): Observable<ApptForm>{
    let body: any = JSON.stringify(apptForm);
    return this.http.post<ApptForm>(`${this.url}apptForm`,body);
  }

  getApptForm(formID: number): Observable<ApptForm>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("formID",formID);
    return this.http.get<ApptForm>(`${this.url}apptForm`,{params:queryParams})
  }


}
