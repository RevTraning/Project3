import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { CookieService } from 'ngx-cookie-service';
import { ApptForm } from 'src/app/models/apptForm';
import { ApptFormService } from 'src/app/services/appt-form.service';


interface docId{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-book-appotments',
  templateUrl: './book-appotments.component.html',
  styleUrls: ['./book-appotments.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class BookAppotmentsComponent implements OnInit {

  hide = true;

  docs: docId[] = [
    {value: 'Default', viewValue: 'Choose Field'},
    {value: '1', viewValue: 'General Medicine'},
    {value: '2', viewValue: 'Orthology'},
    {value: '3', viewValue: 'Dermitology'},
    {value: '4', viewValue: 'OB/GYN'}
  ];

 


  firstFormGroup = this.formBuilder.group({
    dId: ['dId', Validators.required],
    patientHeight:    ['patientHeight', Validators.required],
    patientWeight:    ['patientWeight', Validators.required],
    patientHabits: ['patientHabits', Validators.required]
  });
  secondFormGroup = this.formBuilder.group({
    patientChiefComplaint: ['patientChiefComplaint', Validators.required]
  });


  constructor(private apptFormHttp: ApptFormService, private formBuilder: FormBuilder, private cookie: CookieService ) { }

  ngOnInit(): void {
  }
  
  dateCreated: number = Date.now();
  pid: number = 1;// have to change once we establish a login
  UTCDateOfAppontment: number = Date.now();
  newAppt: ApptForm;


  addApptForm(){
    let newApptForm: ApptForm = new ApptForm(
      this.dateCreated,
      this.pid,// this will change when login is functinal
      Number(this.firstFormGroup.controls.dId.value),
      this.UTCDateOfAppontment,
      Number(this.firstFormGroup.controls.patientHeight.value), 
      Number(this.firstFormGroup.controls.patientWeight.value), 
      this.firstFormGroup.controls.patientHabits.value,
      this.secondFormGroup.controls.patientChiefComplaint.value,);
    console.log("first log: "); //debug statements
    console.log(newApptForm);
    this.apptFormHttp.addApptForm(newApptForm).subscribe(returnA => this.newAppt = returnA);

  }

}
