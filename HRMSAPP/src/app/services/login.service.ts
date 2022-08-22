import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Patient } from '../models/patient';
import { PatientHttpService } from './patient-http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private patHttp: PatientHttpService, private router: Router, private cookie: CookieService) { }
  validLogin: Boolean;

  login(patient: Patient){
    if(patient.email && patient.password){
      this.patHttp.getPatient(patient.email, patient.password).subscribe(
        (response) => {
          console.log(response);
          this.cookie.set('UID',`${response.pId}`);
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
    this.cookie.deleteAll('UID');
    this.router.navigate(['home']);
  }
}
