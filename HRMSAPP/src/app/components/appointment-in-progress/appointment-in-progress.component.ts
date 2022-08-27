import { Component, DoBootstrap, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { CookieService } from 'ngx-cookie-service';
import { ApptForm } from 'src/app/models/apptForm';
import { ApptFormHttpService } from 'src/app/services/appt-form.service';
import { Patient } from 'src/app/models/patient';
import { PatientHttpService } from 'src/app/services/patient-http.service';

import { debounce } from 'rxjs';


interface Symptoms {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-appointment-in-progress',
  templateUrl: './appointment-in-progress.component.html',
  styleUrls: ['./appointment-in-progress.component.css']
})
export class AppointmentInProgressComponent implements OnInit {
  hide = true;

  //Display patient object information plus ApptForm Initialized Fields

  firstFormGroup = this.formBuilder.group({
    DrInitComments: ['Dr Initial Comments', Validators.required] //make this a multi-line
    
  });

  //Objective section
  //Doctor examination data
  secondFormGroup = this.formBuilder.group({
    DrInitComments: ['Examination Data', Validators.required] //API
    //Language -- Set in request, english for now
    //Symptoms
    
    //DOB
    //Gender
  });


  constructor(
    private patHttp: PatientHttpService, 
    private formBuilder: FormBuilder, 
    private cookie: CookieService, 
    ) { }

  ngOnInit(): void {
  }

}
