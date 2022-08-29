import { Component, OnInit } from '@angular/core';
import {  ApptFormHttpService } from 'src/app/services/appt-form.service';
import { ApptForm } from 'src/app/models/apptForm';
import { Doctor } from 'src/app/models/doctor';
import { DoctorHttpService } from 'src/app/services/doctor-http.service';
import { Patient } from 'src/app/models/patient';
import { PatientHttpService } from 'src/app/services/patient-http.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login.service';


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
    private docService:DoctorHttpService,
    private loginS:LoginService
  
    ) { }

  ngOnInit(): void {
    let localVar = (window.localStorage.getItem("userFlag"));
    if(localVar == "1") { this.displayAllDocForms()}
    else if (localVar == '0') { 
      console.log("this is step 1")
      this.displayAllPatForms()
    }

    console.log(`this is the array for the table in inint ${this.pushTable}`)
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
        this.populateApptTable(this.apptformList);    
      }
    );
    
  }

  async displayAllPatForms() {
    //This function will need to call our HTTP Service for returning all movies.
    console.log("start of step 2")
    console.log("in the getting patient forms ")
    console.log(` the cookie has the value of ${this.cookie.get("user")}`)
   
    let patientID = this.loginS.curretnUserId;
    console.log(`the type of for patient id is ${typeof(patientID)} and the value is ${patientID}`)
      this.formService.getAllFormsforPatient(patientID).subscribe(
      (response) => {
        console.log("this is the response")
        console.log(response);
        
        
        console.log(`the list for step 3 is ${this.apptformList}`)
        console.log("the end of step 2")
        this.populateApptTable(response);    

      }
    );

    
  }

  apptTable: any={};
  pushTable: any[] = [];
  
  patName: string;
  docName: string;
  
  //button (click) = 
  refreshTables(){
    this.populateApptTable
  }

  populateApptTable(apptformList){
    let count=0;
    console.log("this is step 3")
    console.log(apptformList)
    for(let i of apptformList) {
      console.log("the value of i is")
      console.log(i)
      let patID = i.patientID
      this.localGetPatient(patID);
      let docID = i.docID
      this.localGetDoctor(docID);
      this.apptTable.apptDate = i.dateAppointment;
      this.apptTable.docName = this.docName;
      this.apptTable.patName = this.patName;
      
      this.pushTable[count]={dateAppointment: i.dateAppointment, Time: i.dateCreated, doctorName:i.patientHeight};
      console.log("the thing being added to the array is ${this.pushTable}")
      console.log(this.pushTable)
    

      count+=1;
    }
    console.log(`the array for the table is`)
    console.log(this.pushTable)
    this.dataSource=this.pushTable
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
