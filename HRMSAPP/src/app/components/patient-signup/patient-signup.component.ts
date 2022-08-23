import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Patient } from 'src/app/models/patient';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';


interface ethnicitie {
  value: string;
  viewValue: string;
}

interface doctor {
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
    {value: 'American Indian or Alaska Native', viewValue: 'American Indian or Alaska Native'},
    {value: 'Asian', viewValue: 'Asian'},
    {value: 'Black or African American', viewValue: 'Black or African American'},
    {value: 'Native Hawaiian or Other Pacific Islander', viewValue: 'Native Hawaiian or Other Pacific Islander'},
    {value: 'White', viewValue: 'White'},
    {value: 'Hispanic or Latino', viewValue: 'Hispanic or Latino'},
  ];

  doctors: doctor[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
  ];


  firstFormGroup = this.formBuilder.group({
    name: ['name', Validators.required],
    email:    ['email', Validators.required],
    password:    ['password', Validators.required],
    cost:    ['cost', Validators.required]
    
  });
  secondFormGroup = this.formBuilder.group({
   doctor: ['doctor', Validators.required],
   ethnicity: ['ethnicity', Validators.required],
   medication: ['medication', Validators.required]
  });


  constructor(private formBuilder: FormBuilder, private cookie: CookieService ) { }

  ngOnInit(): void {
  }
  // name: string;
  // email: string;
  // password: string;
  // dateOfBirth: number;
  // ethnicity: string;
  // medications: string;

  addPatient(){
    // let newPat: Patient = new Patient(this.email, this.password, this.name, this.dateOfBirth, this.ethnicity, this.medications);
    console.log("hi")

  }


  selectedValue: string;
  selectedCar: string;


}
