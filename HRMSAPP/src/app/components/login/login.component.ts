import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { LoginService } from 'src/app/services/login.service';
import {FormBuilder, Validators} from '@angular/forms';
import { Doctor } from 'src/app/models/doctor';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  isChecked = false;
  isDoctor :  string = "Patient";

  
  constructor(private logserv: LoginService) { }

  ngOnInit(): void {
  }

  email: string;
  password: string;
  login(){
    if(this.isChecked) {
      this.loginDoctor();
    } else { 
      this.loginPatient(); 
    }
  }

  loginDoctor(){
    let newDoc: Doctor = new Doctor(this.email, this.password)
    this.logserv.loginDoc(newDoc);
    if(!this.logserv.validLogin){
      window.alert("Invalid Login");  
    }
  }

  loginPatient(){
    let newPat: Patient = new Patient(this.email, this.password)
      this.logserv.login(newPat);
      if(!this.logserv.validLogin){
        window.alert("Invalid Login");
      }
  }

  updateCheckbox(){
    if(this.isChecked){
      this.isDoctor = "Doctor";
    } else {
      this.isDoctor = "Patient";
    }
  }



}
