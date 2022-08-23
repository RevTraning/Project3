import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Patient } from 'src/app/models/patient';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';


interface ethnicities {
  value: string;
  viewValue: string;
}

interface doctors {
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

  coursesT: ethnicities[] = [
    {value: 'University Courses', viewValue: 'University Courses'},
    {value: 'Seminars', viewValue: 'Seminars'},
    {value: 'Certification Preparation Classes', viewValue: 'Certification Preparation Classes'},
    {value: 'Certification', viewValue: 'Certification'},
    {value: 'Technical Training', viewValue: 'Technical Training'},
    {value: 'Other', viewValue: 'Other'},
  ];

  grades: doctors[] = [
    {value: 'letter', viewValue: 'Letter'},
    {value: '5.0-0.0', viewValue: '5.0-0.0'},
    {value: '4.0-0.0', viewValue: '4.0-0.0'},
    {value: '10-0', viewValue: '10-0'},
    {value: '100-0', viewValue: '100-0'},
    {value: 'pass-fail', viewValue: 'pass-fail'},
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
