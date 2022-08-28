import { Component, DoBootstrap, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { CookieService } from 'ngx-cookie-service';
import { ApptForm } from 'src/app/models/apptForm';
import { ApptFormHttpService } from 'src/app/services/appt-form.service';
import { debounce } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-appointment-start',
  templateUrl: './appointment-start.component.html',
  styleUrls: ['./appointment-start.component.css']
})
export class AppointmentStartComponent implements OnInit {
active=1;
ngbNavOutlet;

  constructor(private ApptService: ApptFormHttpService, private formBuilder: FormBuilder, private cookie: CookieService ) { }

  ngOnInit(): void {
  }
  name :string="patient"
  email: string="email@email.com"

 
  }




