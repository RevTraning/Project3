import { Component, DoBootstrap, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { CookieService } from 'ngx-cookie-service';
import { Doctor } from 'src/app/models/doctor';
import { DoctorHttpService } from 'src/app/services/doctor-http.service';
import { debounce } from 'rxjs';

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
    {value: 'American Indian or Alaska Native', viewValue: 'American Indian or Alaska Native'},
    {value: 'Asian', viewValue: 'Asian'},
    {value: 'Black or African American', viewValue: 'Black or African American'},
    {value: 'Native Hawaiian or Other Pacific Islander', viewValue: 'Native Hawaiian or Other Pacific Islander'},
    {value: 'White', viewValue: 'White'},
    {value: 'Hispanic or Latino', viewValue: 'Hispanic or Latino'},
  ];

 


  firstFormGroup = this.formBuilder.group({
    name: ['name', Validators.required],
    email:    ['email', Validators.required],
    password:    ['password', Validators.required],
    license:    ['license', Validators.required]
    
  });
  secondFormGroup = this.formBuilder.group({
    practice: ['practice', Validators.required]
  });


  constructor(private docHttp: DoctorHttpService, private formBuilder: FormBuilder, private cookie: CookieService ) { }

  ngOnInit(): void {
  }
  
  DOB: Date;

  UTCDateOfBirth: number;
  newDoctor: Doctor;
  addDoctor(){
    let newDoc: Doctor = new Doctor(this.firstFormGroup.controls.email.value, this.firstFormGroup.controls.password.value, this.firstFormGroup.controls.name.value, this.UTCDateOfBirth, Number(this.firstFormGroup.controls.license.value), this.secondFormGroup.controls.practice.value);
    console.log(newDoc);
    this.docHttp.addDoctor(newDoc).subscribe(returnD => this.newDoctor = returnD);

  }


  

}
