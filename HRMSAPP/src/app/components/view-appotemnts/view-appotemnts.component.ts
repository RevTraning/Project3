import { Component, OnInit } from '@angular/core';
import {  ApptFormService } from 'src/app/services/appt-form.service';

@Component({
  selector: 'app-view-appotemnts',
  templateUrl: './view-appotemnts.component.html',
  styleUrls: ['./view-appotemnts.component.css']
})
export class ViewAppotemntsComponent implements OnInit {

  constructor(private formService: ApptFormService) { }

  ngOnInit(): void {
  }
  appotimentList :any;

  getAppotiments(id :number){
    this.formService.getAllForms(id).subscribe(
      {
        next:data=>{
          console.log(data)
          this.appotimentList=data;
      },
      error: data=>{
        console.log(data)
      }

    
  })
    
  }


  

}
