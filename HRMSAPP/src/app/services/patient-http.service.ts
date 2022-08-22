import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';


@Injectable({
  providedIn: 'root'
})
export class PatientHttpService {
  url: string = 'http://localhost:8081/';

  constructor(private http: HttpClient, private router: Router) { }

  addPatient(patient: Patient): Observable<Patient>{
    
    let body: any = JSON.stringify(patient);
    return this.http.post<Patient>(`${this.url}patient`,body);

  }

  getPatient(email: string, pass: string): Observable<Patient>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",email);
    queryParams = queryParams.append("password",pass);
    return this.http.get<Patient>(`${this.url}patient`,{params:queryParams})
  }
}
