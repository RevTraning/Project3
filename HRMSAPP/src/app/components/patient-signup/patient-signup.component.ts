import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Patient } from 'src/app/models/patient';



interface Car {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {
  hide = true;
  constructor(private cookie: CookieService ) { }

  ngOnInit(): void {
  }
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  addPatient(){
    let newPat: Patient = new Patient(this.email, this.password, this.firstName, this.lastName);
    console.log(newPat)

  }


  selectedValue: string;
  selectedCar: string;

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];

}
