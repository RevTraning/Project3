import { Component, OnInit } from '@angular/core';
import {  ApptFormHttpService } from 'src/app/services/appt-form.service';
import { ApptForm } from 'src/app/models/apptForm';
import { Doctor } from 'src/app/models/doctor';
import { DoctorHttpService } from 'src/app/services/doctor-http.service';
import { Patient } from 'src/app/models/patient';
import { PatientHttpService } from 'src/app/services/patient-http.service';
import { CookieService } from 'ngx-cookie-service';


/*
We could make this one page for both docs and patients
essential information is appt time, doc name, pat name
Do query from table of appt forms WHERE userID = someCred
Question being how do we differentiate patients from doctors
*/


@Component({
  selector: 'app-view-appotemnts',
  templateUrl: './view-appotemnts.component.html',
  styleUrls: ['./view-appotemnts.component.css']
})
export class ViewAppotemntsComponent implements OnInit {

  constructor(
    private formService: ApptFormHttpService, 
    private cookie: CookieService, 
    private patService: PatientHttpService, 
    private docService:DoctorHttpService
  
    ) { }

  ngOnInit(): void {
    let localVar = (window.localStorage.getItem("userFlag"));
    if(localVar == "1") { this.displayAllDocForms}
    else if (localVar == "0") { this.displayAllPatForms}
    //this.dataSource = this.pushTable;

    
    
  }

  apptformList: ApptForm[] = []; 
  displayAllDocForms() {
    //This function will need to call our HTTP Service for returning all movies.
    let currentDoctor:Doctor = JSON.parse(this.cookie.get(("user")))
    let docID = currentDoctor.dId;
    this.formService.getAllFormsforDoctor(docID).subscribe(
      (response) => {
        console.log(response);
        this.apptformList = response;
      }
    );
    this.populateApptTable(this.apptformList);    
  }

  displayAllPatForms() {
    //This function will need to call our HTTP Service for returning all movies.
    let currentPatient:Patient = JSON.parse(this.cookie.get(("user")))
    let patientID = currentPatient.pId;
    this.formService.getAllFormsforPatient(patientID).subscribe(
      (response) => {
        console.log(response);
        
        this.apptformList = response;
      }
    );
    this.populateApptTable(this.apptformList);    
  }

  apptTable: any;
  pushTable: any[] = [];
  
  patName: string;
  docName: string;
  
  //button (click) = 
  refreshTables(){
    this.populateApptTable
  }

  populateApptTable(apptformList){
    for(let i of apptformList) {
      let patID = i.patientID
      this.localGetPatient(patID);
      let docID = i.docID
      this.localGetDoctor(docID);
      this.apptTable.apptDate = i.dateAppointment;
      this.apptTable.docName = this.docName;
      this.apptTable.patName = this.patName;
      this.pushTable.push(this.apptTable);
    }
  }

  localGetPatient(patID){
    this.patService.getPatientById(patID).subscribe(
      (response) => {
        console.log(response);
        
        this.patName = response.name;
      }
    );
  }

  localGetDoctor(docID){
    this.docService.getDoctorById(docID).subscribe(
      (response) => {
        console.log(response);
        
        this.docName = response.name;
      }
    );
  }



  
  displayedColumns: string[] = ['date', 'Time', 'doctorName'];
  
  dataSource =[{date:25, Time:251, doctorName: "flex"}];



  

}
