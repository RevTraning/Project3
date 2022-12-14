import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApptForm } from '../models/apptForm';
import { Patient } from '../models/patient';
import { Doctor } from '../models/doctor';
import { query } from '@angular/animations';



@Injectable({
  providedIn: 'root'
})
export class ApptFormHttpService {
  url: string = 'http://localhost:5000/api/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }
  constructor(private http: HttpClient, private router: Router) { }


  addApptForm(apptForm: ApptForm): Observable<ApptForm>{
    let patient = new Patient (
        "someEmail", 
        "somePassword", 
        "someName", 
        15, 
        "someEthnicity", 
        "someGender", 
        "someMedications", 
        1
    ); 
    let doctor = new Doctor (
      "someEmail", 
      "somePassword", 
      "someName", 
      15, 
      12345, 
      "somePractice",  
      1
    ); 


    let bodyE: any = {
      "patientChiefComplaint":apptForm.patientChiefComplaint,
      "patientHabits":apptForm.patientHabits,
      "patientHeight":apptForm.patientHeight,
      "patientWeight":apptForm.patientWeight,
      "pId":apptForm.patientID,
      "dId":apptForm.docID,
      "dateCreated": apptForm.dateCreated,
      "dateAppointment": apptForm.dateAppointment,
      "patName":apptForm.patientName,
      "docName":apptForm.docName


    }

    let body: any = JSON.stringify(bodyE);
    console.log("ApptForm Service Log: "); //debug statements
    console.log(bodyE);
    console.log(body);
    return this.http.post<ApptForm>(`${this.url}apptForm/add`,body, this.httpOptions);
  }


  getApptForm(formID: number): Observable<ApptForm>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("formID",formID);
    return this.http.get<ApptForm>(`${this.url}apptForm`,{params:queryParams})
  }

  getAllFormsBetweenDates( min:number, max:number): Observable<ApptForm[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("dateMin", min);
    queryParams = queryParams.append("dateMax", max);
    return this.http.get<ApptForm[]>(`${this.url}apptForm`,{params:queryParams});
    
  }

  getAllFormsforPatient( patId:number): Observable<ApptForm[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pId", patId)
    return this.http.get<ApptForm[]>(`${this.url}apptForm`,{params:queryParams}
    )
    
  }

  getAllFormsforDoctor( docId:number): Observable<ApptForm[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("dId", docId)
    return this.http.get<ApptForm[]>(`${this.url}apptForm`,{params:queryParams}
    )
  }

  getAllForms(): Observable<ApptForm[]> {
    
    return this.http.get<ApptForm[]>(`${this.url}apptForm/`)
    
  }


  updateApptForm(apptForm: any): Observable<ApptForm>{


    console.log("in the sending request function the date is")
    console.log(apptForm)
    let id=apptForm.formId

    
    let bodyE: any = 
    //Order of operation for constructor?
    {
      formID: apptForm.formId,
      dateCreated: apptForm.dateCreated,
      patientChiefComplaint:apptForm.patientChiefComplaint,
      patientHabits:apptForm.patientHabits,
      patientHeight:apptForm.patientHeight,
      patientWeight:apptForm.patientWeight,
      dateAppointment:apptForm.dateAppointment,
      pId:apptForm.pId,
      dId:apptForm.dId,
      doctorInitialComments:apptForm.doctorInitialComments, 
      doctorExaminationData:apptForm.doctorExaminationData, 
      doctorAssessment: apptForm.doctorAssessment, 
      doctorTreatment: apptForm.doctorTreatment, 
      doctorPrescription: apptForm.doctorPrescription      
    }
    let body: any = JSON.stringify(bodyE); 
    console.log("the body looks like")
    console.log(bodyE)
    
    return this.http.put<ApptForm>(`${this.url}apptForm/${id}`,body, this.httpOptions);
  }


}
