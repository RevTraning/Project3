import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';



@Injectable({
  providedIn: 'root'
})
export class PatientHttpService {
  url: string = 'http://localhost:5000/api/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient, private router: Router) { }

  addPatient(patient: Patient): Observable<Patient>{
    
    let bodyE: any = 
    
    {
      "dateOfBirth":patient.dateOfBirth,
      "email":patient.email,
      "ethnicity":patient.ethnicity,
      "gender":patient.gender,
      "medications":patient.medications,
      "name":patient.name,
      "password":patient.password
    }
    
    

    let jsonBody = JSON.stringify(bodyE);

    console.log(bodyE); //debug block
    console.log(jsonBody);

    return this.http.post<Patient>(`${this.url}patient/add`,jsonBody,this.httpOptions);
    

  }

  getPatient(email: string, pass: string): Observable<Patient>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",email);
    queryParams = queryParams.append("password",pass);
    return this.http.get<Patient>(`${this.url}patient`,{params:queryParams})
  }
}
