import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { CookieService } from 'ngx-cookie-service';
import { ApptForm } from 'src/app/models/apptForm';
import { ApptFormHttpService } from 'src/app/services/appt-form.service';
import { DatepickerApComponent } from '../datepicker-ap/datepicker-ap.component';
import { LoginService } from 'src/app/services/login.service';
import { DoctorHttpService } from 'src/app/services/doctor-http.service';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Doctor } from 'src/app/models/doctor';


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
  docId:string;
 


  firstFormGroup = this.formBuilder.group({
    dId: ['dId', Validators.required],
    patientHeight:    ['patientHeight', Validators.required],
    patientWeight:    ['patientWeight', Validators.required],
    patientHabits: ['patientHabits', Validators.required]
  });
  secondFormGroup = this.formBuilder.group({
    patientChiefComplaint: ['patientChiefComplaint', Validators.required],
    apptDate:['apptDate', Validators.required]
  });


  constructor(private apptFormHttp: ApptFormHttpService, 
    private formBuilder: FormBuilder, 
    private cookie: CookieService , 
    private date: DatepickerApComponent, 
    private logINServ :LoginService,
    private docServ:DoctorHttpService) { }

  ngOnInit(): void {
    this.getAllDoctors()
  }
  dateAppointment: string;
  
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
      this.logINServ.currentUserName,
      Number(this.firstFormGroup.controls.dId.value),
      "docName",//todo
      this.UTCDateOfAppontment,
      Number(this.firstFormGroup.controls.patientHeight.value), 
      Number(this.firstFormGroup.controls.patientWeight.value), 
      this.firstFormGroup.controls.patientHabits.value,
      this.secondFormGroup.controls.patientChiefComplaint.value,);

     this.docId=this.firstFormGroup.controls.dId.value;

      let dateString=this.secondFormGroup.controls.apptDate.value
      newApptForm.patientName=this.logINServ.currentUserName
      newApptForm.dateAppointment=Date.parse(dateString)
      newApptForm.dateCreated=new Date().getTime();
      newApptForm.patientID=this.pid
      newApptForm.docID=Number(this.firstFormGroup.controls.dId.value);
      let foundValue=this.docs.findIndex((doc)=> doc.value== this.docId)
      newApptForm.docName=this.docs[foundValue].viewValue

      newApptForm.patientChiefComplaint=this.secondFormGroup.controls.patientChiefComplaint.value
      newApptForm.patientHabits=this.firstFormGroup.controls.patientHabits.value
      newApptForm.patientHeight=Number(this.firstFormGroup.controls.patientHeight.value)
      newApptForm.patientWeight= Number(this.firstFormGroup.controls.patientWeight.value)
      

    console.log("first log: "); //debug statements
    console.log(newApptForm);
    this.apptFormHttp.addApptForm(newApptForm).subscribe(returnA => this.newAppt = returnA);

  }

  getAllDoctors(){
    this.docServ.getAlldoctors().subscribe((res)=>{
      this.fillList(res)

    })

  }

  fillList(list :Doctor[]){
    let temp :any []=[]
    temp[0]={value: 'Default', viewValue: 'Choose Field'}
    let count=1
    for(let i of list){
      temp[count]={
        value: i.dId,
        viewValue:i.name
      }
      count++

    }
    this.docs=temp


  }

}


