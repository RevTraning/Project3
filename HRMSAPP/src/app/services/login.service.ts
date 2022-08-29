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
  curretnUserId: number=0;
  login(patient: Patient){
    if(patient.email && patient.password){
      this.patHttp.getPatient(patient.email, patient.password).subscribe(
        (response) => {
           console.log(`the response for the log in service is j${response}`);
          this.cookie.set('user',`${response}`);
          this.currentUserEmail = response.email;
          this.currentUserName = response.name;
          this.curretnUserId=response.pId;
          // window.localStorage.setItem("userName", response.name);
          // window.localStorage.setItem("userEmail", response.email);
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
          this.curretnUserId=response.dId;
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

    this.cookie.deleteAll();
    this.router.navigate(['home']);
    window.localStorage.clear();
    this.validLogin = false;
    this.currentUserEmail = "";
    this.currentUserName = "";
  }
}
