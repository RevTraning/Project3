import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { CookieService } from 'ngx-cookie-service';
import { ApptForm } from 'src/app/models/apptForm';
import { ApptFormHttpService } from 'src/app/services/appt-form.service';
import { DatepickerApComponent } from '../datepicker-ap/datepicker-ap.component';
import { LoginService } from 'src/app/services/login.service';


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


  constructor(private apptFormHttp: ApptFormHttpService, private formBuilder: FormBuilder, private cookie: CookieService , private date: DatepickerApComponent, private logINServ :LoginService) { }

  ngOnInit(): void {
  }
  
  dateCreated: number = this.date.fromDateC();
  pid =this.logINServ.currentUserId;// have to change once we establish a login
  // UTCDateOfAppontment: number = this.date.utcDate.getTime();
  UTCDateOfAppontment: number = Date.now();
  newAppt: ApptForm;


  addApptForm(){
    this.UTCDateOfAppontment=this.date.fromDateC()
    this.pid =this.logINServ.currentUserId;
    let newApptForm: ApptForm = new ApptForm(
      this.dateCreated,
      this.pid,// this will change when login is functinal
      Number(this.firstFormGroup.controls.dId.value),
      this.UTCDateOfAppontment,
      Number(this.firstFormGroup.controls.patientHeight.value), 
      Number(this.firstFormGroup.controls.patientWeight.value), 
      this.firstFormGroup.controls.patientHabits.value,
      this.secondFormGroup.controls.patientChiefComplaint.value,);


      newApptForm.dateAppointment=new Date().getTime()
      newApptForm.dateCreated=new Date().getTime();
      newApptForm.patientID=this.pid
      newApptForm.docID=Number(this.firstFormGroup.controls.dId.value);
      newApptForm.patientChiefComplaint=this.secondFormGroup.controls.patientChiefComplaint.value
      newApptForm.patientHabits=this.firstFormGroup.controls.patientHabits.value
      newApptForm.patientHeight=Number(this.firstFormGroup.controls.patientHeight.value)
      newApptForm.patientWeight= Number(this.firstFormGroup.controls.patientWeight.value)
      

    console.log("first log: "); //debug statements
    console.log(newApptForm);
    this.apptFormHttp.addApptForm(newApptForm).subscribe(returnA => this.newAppt = returnA);

  }

}
