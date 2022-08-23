import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorHttpService {
  url: string = 'http://localhost:8081/';
  constructor(private http: HttpClient, private router: Router) { }

  addDoctor(patient: Doctor): Observable<Doctor>{
    
    let body: any = JSON.stringify(patient);
    return this.http.post<Doctor>(`${this.url}doctor`,body);

  }

  getDoctor(email: string, pass: string): Observable<Doctor>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",email);
    queryParams = queryParams.append("password",pass);
    return this.http.get<Doctor>(`${this.url}doctor`,{params:queryParams})
  }


}
