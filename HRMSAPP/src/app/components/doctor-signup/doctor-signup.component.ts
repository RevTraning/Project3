import { Component, DoBootstrap, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { CookieService } from 'ngx-cookie-service';
import { Doctor } from 'src/app/models/doctor';
import { DoctorHttpService } from 'src/app/services/doctor-http.service';
import { debounce } from 'rxjs';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { Router } from '@angular/router';

interface practice{
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class DoctorSignupComponent implements OnInit {

  hide = true;

  practices: practice[] = [
    {value: 'Default', viewValue: 'Choose Field'},
    {value: 'General Medicine', viewValue: 'General Medicine'},
    {value: 'Orthology', viewValue: 'Orthology'},
    {value: 'Dermitology', viewValue: 'Dermitology'},
    {value: 'OB/GYN', viewValue: 'OB/GYN'}
  ];

 


  firstFormGroup = this.formBuilder.group({
    name: ['name', Validators.required],
    email:    ['email', Validators.required],
    password:    ['password', Validators.required],
    license:    ['license', Validators.required]
    
  });
  secondFormGroup = this.formBuilder.group({
    practice: ['practice', Validators.required],
    apptDate:['apptDate', Validators.required]
  });


  constructor(
    private docHttp: DoctorHttpService, 
    private formBuilder: FormBuilder, 
    private cookie: CookieService , 
    private date: DatepickerComponent,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  DOB: Date ;
  
  newDoctor: Doctor;
  addDoctor(){
    let dateString=this.secondFormGroup.controls.apptDate.value;
    let UTCDateOfBirth: number = Date.parse(dateString);
    console.log("dateString: " + dateString + "utc: " + UTCDateOfBirth);
    let newDoc: Doctor = new Doctor(
      this.firstFormGroup.controls.email.value, 
      this.firstFormGroup.controls.password.value, 
      this.firstFormGroup.controls.name.value, 
      UTCDateOfBirth, 
      Number(this.firstFormGroup.controls.license.value), 
      this.secondFormGroup.controls.practice.value);
    console.log(newDoc);
    this.docHttp.addDoctor(newDoc).subscribe(returnD => this.newDoctor = returnD);
    this.router.navigate(["login"]);
  }


  

}
