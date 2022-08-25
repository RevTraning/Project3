import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LabResults } from '../models/labResults';

@Injectable({
  providedIn: 'root'
})
export class LabResultsService {
  url: string = 'http://localhost:8081/';
  constructor(private http: HttpClient, private router: Router) { }

  addApptForm(labResults: LabResults): Observable<LabResults>{
    let body: any = JSON.stringify(labResults);
    return this.http.post<LabResults>(`${this.url}apptForm`,body);
  }

  getApptForm(labResultsID: number): Observable<LabResults>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("formID",labResultsID);
    return this.http.get<LabResults>(`${this.url}apptForm`,{params:queryParams})
  }


}
