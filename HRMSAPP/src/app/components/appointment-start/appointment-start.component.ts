import { Component, DoBootstrap, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { CookieService } from 'ngx-cookie-service';
import { ApptForm } from 'src/app/models/apptForm';
import { ApptFormService } from 'src/app/services/appt-form.service';
import { debounce } from 'rxjs';

@Component({
  selector: 'app-appointment-start',
  templateUrl: './appointment-start.component.html',
  styleUrls: ['./appointment-start.component.css']
})
export class AppointmentStartComponent implements OnInit {

  hide = true;

  

  //todo put in datepicker for appointments

  //formID given in database
  dateCreated = Date.now;
  patientID = newPat.pId;
  //docID = selected from Form during appt picking 

  patientName = newPat.name;
  //patientAge = currentPatient.DOB some function
  patientEthnicity = newPat.ethnicity;
  patientSex = newPat.patientSex;
  patientMedications = newPat.medications;


  firstFormGroup = this.formBuilder.group({
    patientHeight:    [0.00, Validators.required],
    patientWeight:    [0.00, Validators.required],
    patientHabits:    ['Recent Dietary Habits', Validators.required],
    patientChiefComplaint:    ['Chief Complaint', Validators.required]    
  });

  //<><><><><>End of fields which patient fulfills<><><><><>


  constructor(private ApptService: ApptFormService, private formBuilder: FormBuilder, private cookie: CookieService ) { }

  ngOnInit(): void {
  }

  UTCformCreationDate: number;
  newApptForm: ApptForm;
  addApptForm(){
    let newApptForm: ApptForm = new ApptForm(
      this.firstFormGroup.controls.patientHeight.value,
      this.firstFormGroup.controls.patientWeight.value,
      this.firstFormGroup.controls.patientHabits.value,
      this.firstFormGroup.controls.patientChiefComplaint.value,
      )
  }



}
