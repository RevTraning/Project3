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
   
    let docID = this.loginS.currentUserId;
    this.formService.getAllFormsforDoctor(docID).subscribe(
      (response) => {
       
        this.populateApptTable(response);    
      }
    );
    
  }

  async displayAllPatForms() {
    //This function will need to call our HTTP Service for returning all movies.
    console.log("start of step 2")
    console.log("in the getting patient forms ")
    console.log(` the cookie has the value of ${this.cookie.get("user")}`)
   
    let patientID = this.loginS.currentUserId;
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

  async populateApptTable(apptformList: any[]){
    let count=0;
    for(let i of apptformList) {
      console.log("the value of i is")
      console.log(i)
      let patID = i.pId
      let patName1=  this.localGetPatient(patID);
      console.log("patName1 is ")
      console.log(patName1)
      let docID = i.dId
      let docName1=this.localGetDoctor(docID);
      this.pushTable[count]={dateAppointment: i.dateAppointment, Time: i.dateCreated, doctorName:docName1,
      patName: patName1};
      count+=1;
    }
    console.log(`the array for the table is`)
    console.log(this.pushTable)
    this.dataSource=this.pushTable
  }

  localGetPatient(patID) {
    let nam1:string
    this.patService.getPatientById(patID).subscribe(
      (response) => {
        console.log(response);
        console.log("the name is ")
        console.log(response.name)
        
        nam1= response.name
      console.log("returning name")
       return nam1
      
      }
    );
   
  }

  localGetDoctor(docID){
    let name1:string
    this.docService.getDoctorById(docID).subscribe(
      (response) => {
        console.log(response);
        
         name1=response.name;
      }
    );
    return name1
  }



  
  displayedColumns: string[] = ['date', 'doctorName','patName'];
  
  dataSource =[{date:25, Time:251, doctorName: "flex"}];



  

}
