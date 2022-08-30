import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Doctor } from '../models/doctor';
import { Patient } from '../models/patient';
import { DoctorHttpService } from './doctor-http.service';
import { PatientHttpService } from './patient-http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private patHttp: PatientHttpService, private docHttp: DoctorHttpService, private router: Router, private cookie: CookieService) { }
  validLogin: Boolean = false;
  currentUserEmail: string = "";
  currentUserName: string = "";
  currentUserId: number=0;
  currentUserBd: number = 0;
  currentTime: number = Date.now();
  currentUserBy: number = 0;
  currentUserG: string = "";
  login(patient: Patient){
    if(patient.email && patient.password){
      this.patHttp.getPatient(patient.email, patient.password).subscribe(
        (response) => {
           console.log(`the response for the log in service is j${response}`);
          this.cookie.set('user',`${response}`);
          this.currentUserEmail = response.email;
          this.currentUserName = response.name;
          this.currentUserId=response.pId;
          this.currentUserBd = response.dateOfBirth;
          this.currentUserBy =  1980; 
          this.currentUserG = response.gender;
          window.localStorage.setItem("userFlag", '0');
          // this.movieList = [];
          // response.forEach(movie => {
          //   this.movieList.push(movie);
          // })
        }
      );
      this.validLogin= true;
      this.router.navigate(['profile']);
      
    }else{
      this.validLogin= false;
    }
  }
  loginDoc(doctor: Doctor){
    if(doctor.email && doctor.password){
      this.docHttp.getDoctor(doctor.email, doctor.password).subscribe(
        (response) => {
          // console.log(response);
          this.cookie.set('user',`${response}`);
          this.currentUserEmail = response.email;
          this.currentUserName = response.name;
          this.currentUserId=response.dId;
          // window.localStorage.setItem("userName", response.name);
          // window.localStorage.setItem("userEmail", response.email);
          window.localStorage.setItem("userFlag", '1');
          // this.movieList = [];
          // response.forEach(movie => {
          //   this.movieList.push(movie);
          // })
        }
      );
      this.validLogin= true;
      this.router.navigate(['profile']);
      
    }else{
      this.validLogin= false;
    }
  }

  logout(){
    this.validLogin = false;
    this.currentUserEmail = "";
    this.currentUserName = "";
    this.currentUserId = 0;
    this.currentUserBd = 0;
    this.currentUserG = "";
    this.cookie.deleteAll();
    this.router.navigate(['home']);
    window.localStorage.clear();
    
  }
}
