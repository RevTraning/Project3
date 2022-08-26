import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorHttpService {
  url: string = 'http://localhost:5000/api/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient, private router: Router) { }

  addDoctor(doctor: Doctor): Observable<Doctor>{
    
    let bodyD: any = 
    
    {
      "dateOfBirth":1, //update back-end to use long instead of int
      "email":doctor.email,
      "licenseN":doctor.licenseN,
      "practice":doctor.practice,
      "name":doctor.name,
      "password":doctor.password
    }
    
    let jsonBody = JSON.stringify(bodyD);
    
    console.log(bodyD); //debug block
    console.log(jsonBody);

    return this.http.post<Doctor>(`${this.url}doctor/add`,jsonBody,this.httpOptions);

  }

  getDoctor(email: string, pass: string): Observable<Doctor>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",email);
    queryParams = queryParams.append("password",pass);
    return this.http.get<Doctor>(`${this.url}doctor`,{params:queryParams})
  }


}
