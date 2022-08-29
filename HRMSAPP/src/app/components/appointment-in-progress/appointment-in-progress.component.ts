import { Component, DoBootstrap, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { CookieService } from 'ngx-cookie-service';
import { ApptForm } from 'src/app/models/apptForm';
import { ApptFormHttpService } from 'src/app/services/appt-form.service';
import { Patient } from 'src/app/models/patient';
import { PatientHttpService } from 'src/app/services/patient-http.service';
import { Router } from '@angular/router';


import { debounce } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';


interface Symptoms {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-appointment-in-progress',
  templateUrl: './appointment-in-progress.component.html',
  styleUrls: ['./appointment-in-progress.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class AppointmentInProgressComponent implements OnInit {
  hide = true;

  //Display patient object information plus ApptForm Initialized Fields

  firstFormGroup = this.formBuilder.group({
    name: ['patName', Validators.required],
    email: ['patEmail', Validators.required], 
    dateOfBirth: ['patDOB', Validators.required], 
    ethnicity: ['patEthnicity', Validators.required], 
    gender: ['patGender', Validators.required], 
    medications: ['patMedications', Validators.required], 

    dateAppointment: ['formApptDate', Validators.required],
    patientHeight: ['patHeight', Validators.required],
    patientWeight: ['patWeight', Validators.required],
    patientHabits: ['patHabits', Validators.required],
    patientChiefComplaint: ['patComplaint', Validators.required],

    doctorInitialComments: ['docInitComments', Validators.required]
  });

  
  secondFormGroup = this.formBuilder.group({
    doctorExaminationData: ['docExam', Validators.required],
    //API Data
    symptoms: ['APIsymptoms', Validators.required],
    //DOB get from patient
    //Gender get from patient
    // Name: ['APIname', Validators.required],
    // Accuracy: ['APIaccuracy', Validators.required],
    // Icd: ['APIicd', Validators.required],
    // IcdName: ['APIicdName', Validators.required],
    // ProfName: ['APIProfName', Validators.required]
  });

  thirdFormGroup = this.formBuilder.group({
    doctorAssessment: ['docAssessment', Validators.required],
    doctorTreatment: ['docTreatment', Validators.required],
    doctorPrescription: ['docPrescription', Validators.required]
  });


  constructor(
    private patHttp: PatientHttpService, 
    private formBuilder: FormBuilder, 
    private cookie: CookieService, 
    private router: Router,
    private apptFormHttp: ApptFormHttpService
    ) { }

  ngOnInit(): void {
  }

  // availApptForms:ApptForm[];
  // currApptForm:ApptForm;
  // currPat: Patient;
  // currDoc: Doctor = JSON.parse(this.cookie.get(("user")));
  // docID = this.currDoc.dId;



  // localGetAllApptForm(){
  //   this.apptFormHttp.getAllFormsforDoctor(this.docID).subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.availApptForms = response;
  //     })
  // }

  // localGetPatient(){
  //   //this.currApptForm = selection.value
  //   this.patHttp.getPatientById(this.currApptForm.patientID).subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.currPat = response;
  //     }
  //   )
  // }

}
