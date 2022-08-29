import { Component, DoBootstrap, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { CookieService } from 'ngx-cookie-service';
import { ApptForm } from 'src/app/models/apptForm';
import { ApptFormHttpService } from 'src/app/services/appt-form.service';
import { debounce } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-appointment-start',
  templateUrl: './appointment-start.component.html',
  styleUrls: ['./appointment-start.component.css']
})
export class AppointmentStartComponent implements OnInit {
// active=1;
// ngbNavOutlet;
  // nameBe: any = JSON.parse(this.cookie.get('user')); 
  constructor(private ApptService: ApptFormHttpService, private formBuilder: FormBuilder, private cookie: CookieService, public logser: LoginService ) { }

  ngOnInit(): void {
    // console.log(this.cookie.get('user')); 
    // let currentN =window.localStorage.getItem('userName');
    // let currentE =window.localStorage.getItem('userEmail');
    this.name = "Name: "+ this.logser.currentUserName;
    this.email = "Email: " + this.logser.currentUserEmail;
  }
  
  name: string;
  email: string;
  
  


  // wrightToHtml(){
  //   console.log('nameBe:');
  //   console.log(this.nameBe);
  //   this.name="Name: "+ this.nameBe.name;
  //   this.email="Email: "+ this.nameBe.email;
  // }
 
  }




