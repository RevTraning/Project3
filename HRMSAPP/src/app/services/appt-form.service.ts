import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApptForm } from '../models/apptForm';

@Injectable({
  providedIn: 'root'
})
export class ApptFormService {
  url: string = 'http://localhost:5000/api/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }
  constructor(private http: HttpClient, private router: Router) { }

  addApptForm(apptForm: ApptForm): Observable<ApptForm>{
    let bodyE: any = 
    
    {
      "patientChiefComplaint":apptForm.patientChiefComplaint,
      "patientHabits":apptForm.patientHabits,
      "patientHeight":apptForm.patientHeight,
      "patientWeight":apptForm.patientWeight,
      "pId":apptForm.patientID,
      "dId":apptForm.docID,
    }

    let body: any = JSON.stringify(bodyE);
    return this.http.post<ApptForm>(`${this.url}apptForm`,body, this.httpOptions);
  }

  getApptForm(formID: number): Observable<ApptForm>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("formID",formID);
    return this.http.get<ApptForm>(`${this.url}apptForm`,{params:queryParams})
  }

  getAllForms( PatientId:number): Observable<ApptForm> {
    
    return this.http.get<ApptForm>(`${this.url}apptForm/${PatientId}`)
    
  }


}
