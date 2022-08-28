import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Patient } from 'src/app/models/patient';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { PatientHttpService } from 'src/app/services/patient-http.service';
import { Router } from '@angular/router';


interface ethnicitie {
  value: string;
  viewValue: string;
}

interface gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class PatientSignupComponent implements OnInit {
  hide = true;

  ethnicities: ethnicitie[] = [
    {value: 'Other', viewValue: 'Choose'},
    {value: 'American Indian or Alaska Native', viewValue: 'American Indian or Alaska Native'},
    {value: 'Asian', viewValue: 'Asian'},
    {value: 'Black or African American', viewValue: 'Black or African American'},
    {value: 'Native Hawaiian or Other Pacific Islander', viewValue: 'Native Hawaiian or Other Pacific Islander'},
    {value: 'White', viewValue: 'White'},
    {value: 'Hispanic or Latino', viewValue: 'Hispanic or Latino'},
  ];

  gender: gender[] = [
    {value: 'Other', viewValue: 'Choose'},
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
    {value: 'Other', viewValue: 'Other'}
  ];


  firstFormGroup = this.formBuilder.group({
    name: ['name', Validators.required],
    email:    ['email', Validators.required],
    password:    ['password', Validators.required],
    cost:    ['cost', Validators.required]
    
  });
  secondFormGroup = this.formBuilder.group({
   gender: ['gender', Validators.required],
   ethnicity: ['ethnicity', Validators.required],
   medication: ['medication', Validators.required]
  });


  constructor(private patHttp: PatientHttpService, 
              private formBuilder: FormBuilder, 
              private cookie: CookieService, 
              private date: DatepickerComponent, 
              private router: Router) { }

  ngOnInit(): void {
  }
  DOB: number = Date.now() ;//= this.date.getTime();


  newPatient: Patient;
  addPatient(){
    let newPat: Patient = new Patient(
      this.firstFormGroup.controls.email.value, 
      this.firstFormGroup.controls.password.value, 
      this.firstFormGroup.controls.name.value, 
      this.DOB, 
      this.secondFormGroup.controls.ethnicity.value, 
      this.secondFormGroup.controls.gender.value,
      this.secondFormGroup.controls.medication.value
      );
    console.log(newPat);
    this.patHttp.addPatient(newPat).subscribe(returnP => this.newPatient = returnP);
    this.router.navigate(["login"]);
  }


}
