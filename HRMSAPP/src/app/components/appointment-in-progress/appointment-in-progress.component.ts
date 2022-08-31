import { Component, DoBootstrap, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { CookieService } from 'ngx-cookie-service';
import { ApptForm } from 'src/app/models/apptForm';
import { ApptFormHttpService } from 'src/app/services/appt-form.service';
import { Patient } from 'src/app/models/patient';
import { PatientHttpService } from 'src/app/services/patient-http.service';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { LoginService } from 'src/app/services/login.service';


interface apptFormSelector {
  value: number;
  viewValue: string;
}

 


@Component({
  selector: 'app-appointment-in-progress',
  templateUrl: './appointment-in-progress.component.html',
  styleUrls: ['./appointment-in-progress.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class AppointmentInProgressComponent implements OnInit {
  formsList: any[]=[]
  formChoice:number;
  workingForm: any;
  habit: string=" hi";
  height:number=90;
  weight:number=30;
  iComments:string
  dAssessment:string
  DExamanition:string
  DTreatment:string
  prescription:string
 


  constructor(
    private patHttp: PatientHttpService, 
    private formBuilder: FormBuilder, 
    private cookie: CookieService, 
    private router: Router,
    private apptFormHttp: ApptFormHttpService,
    public  logser: LoginService,
    private loginServ:LoginService
    ) { }

  ngOnInit(): void {
    this.allApptForms()
  }

  allApptForms(){
    this.apptFormHttp.getAllFormsforDoctor(this.loginServ.currentUserId).subscribe((res)=>{
      //console.log(res)
      this.formsList=res
    })

  }

  indexWorkingForm(){
    console.log(this.formsList)
    let index=this.formsList.findIndex(form=>form.formId==this.formChoice)
    console.log(index)
    return this.formsList[index]
  }

  showFields(){
    this.workingForm=this.indexWorkingForm();
    console.log(this.workingForm)
    //console.log(activeForm)
    this.habit=this.workingForm.patientHabits;
    this.weight=this.workingForm.patientWeight;
    this.height=this.workingForm.patientHeight;

  }

  updateForm(){

    this.workingForm.doctorAssessment=this.dAssessment
    this.workingForm.doctorExaminationData=this.DExamanition
    this.workingForm.doctorInitialComments=this.iComments
    this.workingForm.doctorPrescription=this.prescription
    this.workingForm.doctorTreatment=this.DTreatment
    console.log('before submitting update')
    console.log(this.workingForm)

    this.apptFormHttp.updateApptForm(this.workingForm).subscribe((res)=>{
      console.log("the response is")
      console.log(res)
    })
     
    this.router.navigate(["profile"])
  } 

}
