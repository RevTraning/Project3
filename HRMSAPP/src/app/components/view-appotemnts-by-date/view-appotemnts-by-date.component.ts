import { Component, OnInit } from '@angular/core';
import {  ApptFormHttpService } from 'src/app/services/appt-form.service';
import { ApptForm } from 'src/app/models/apptForm';
import { Doctor } from 'src/app/models/doctor';
import { DoctorHttpService } from 'src/app/services/doctor-http.service';
import { Patient } from 'src/app/models/patient';
import { PatientHttpService } from 'src/app/services/patient-http.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-view-appotemnts-by-date',
  templateUrl: './view-appotemnts-by-date.component.html',
  styleUrls: ['./view-appotemnts-by-date.component.css']
})
export class ViewAppotemntsByDateComponent implements OnInit {
  constructor(
    private formService: ApptFormHttpService, 
    private cookie: CookieService, 
    private patService: PatientHttpService, 
    private docService:DoctorHttpService,
    private loginS:LoginService
  
    ) { }

  ngOnInit(): void {
    // let localVar = (window.localStorage.getItem("userFlag"));
    // if(localVar == "1") { this.displayAllDocForms()}
    // else if (localVar == '0') { this.displayAllPatForms() }
  }

  apptformList: ApptForm[] = []; 
  displayAllDocForms() {
    let docID = this.loginS.currentUserId;
      this.formService.getAllFormsBetweenDates(Number(this.min),Number(this.max)).subscribe(
        (response) => {       
          this.populateApptTable(response);    
      }
    );
  }

  

  apptTable: any={};
  pushTable: any[] = [{date:25, Time:251, doctorName: "flex"}];
  patName: string;
  docName: string;
  locDoc: Doctor;
  locPat: Patient; 
  min: string;
  max: string;
  
  refreshTables() {
    let localVar = (window.localStorage.getItem("userFlag"));
    
  }

  async populateApptTable(apptformList: any[]){
    let count=0;
    for(let i of apptformList) {
      this.pushTable[count]={
        dateAppointment: i.dateAppointment, 
        Time: i.dateCreated, 
        docName: i.docName,
        patName: i.patName
      };
      count++;

      //Debug Block
    }
    this.dataSource=this.pushTable
  }
  
  displayedColumns: string[] = ['date', 'docName','patName'];
  
  dataSource = [];

}
