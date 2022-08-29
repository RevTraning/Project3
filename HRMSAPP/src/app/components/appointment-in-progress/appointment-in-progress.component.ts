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


interface apptFormSelector {
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

  patName: string;
  patEmail: string;
  patDOB: number;
  patEthnicity: string;
  patGender: string;
  patMedications: string;

  formApptDate: number;
  patHeight: number;
  patWeight: number;
  patHabits: string;
  patComplaint: string;

  availApptForms:ApptForm[] = [];
  currApptForm:ApptForm;
  currPat: Patient;
  currDoc: Doctor = JSON.parse(this.cookie.get(("user")));
  docID = this.currDoc.dId;

  apptformList: ApptForm[] = [];
  
  

  displayAllDocForms() {
    //This function will need to call our HTTP Service for returning all movies.
    let currentDoctor:Doctor = JSON.parse(this.cookie.get(("user")))
    let docID = currentDoctor.dId;
    this.apptFormHttp.getAllFormsforDoctor(docID).subscribe(
      (response) => {
        console.log(response);
        this.apptformList = response;
      }
    );
    //this.populateApptTable(this.apptformList);    
  }

  populateApptForm(){
    for(let i of this.availApptForms) {
      this.apptForms.push({value: i.formID, viewValue: String(i.dateAppointment)})
    }

  }


  

  apptForms: apptFormSelector[] = [
    {value: -1, viewValue: "Choose"},
  ];

  firstFormGroup = this.formBuilder.group({

    apptSelect: ['apptSelect', Validators.required],

    // patName: ['patName', Validators.required],
    // patEmail: ['patEmail', Validators.required], 
    // patDOB: ['patDOB', Validators.required], 
    // patEthnicity: ['patEthnicity', Validators.required], 
    // patGender: ['patGender', Validators.required], 
    // patMedications: ['patMedications', Validators.required], 

    // formApptDate: ['formApptDate', Validators.required],
    // patHeight: ['patHeight', Validators.required],
    // patWeight: ['patWeight', Validators.required],
    // patHabits: ['patHabits', Validators.required],
    // patComplaint: ['patComplaint', Validators.required],

    docInitComments: ['docInitComments', Validators.required]
  });

  


  
  secondFormGroup = this.formBuilder.group({
    docExam: ['docExam', Validators.required],
    //API Data
    APIsymptoms: ['APIsymptoms', Validators.required],
    //DOB get from patient
    //Gender get from patient
    // Name: ['APIname', Validators.required],
    // Accuracy: ['APIaccuracy', Validators.required],
    // Icd: ['APIicd', Validators.required],
    // IcdName: ['APIicdName', Validators.required],
    // ProfName: ['APIProfName', Validators.required]
  });

  thirdFormGroup = this.formBuilder.group({
    docAssessment: ['docAssessment', Validators.required],
    docTreatment: ['docTreatment', Validators.required],
    docPrescription: ['docPrescription', Validators.required]
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

  

}
