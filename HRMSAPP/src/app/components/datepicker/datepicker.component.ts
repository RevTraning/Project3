import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {NgbDate, NgbCalendar, NgbDateNativeUTCAdapter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  

  // model: NgbDateStruct;
  
  



  // constructor(){}
  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  date: {year: number, month: number};
  // toDate: NgbDate | null = null;
  
  fromDateC: any = this.cunverter.toModel;
  utcDate: Date= new Date(Date.UTC(this.fromDateC.year, this.fromDateC.month, this.fromDateC.day));
  constructor(private calendar: NgbCalendar, private cunverter: NgbDateNativeUTCAdapter) {
    this.fromDate = calendar.getToday();
    // this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }
  // UTCDate: number = this.model.
  // dateC: any = this.cunverter.toModel;
  // utcDate: Date = new Date(Date.UTC(this.model.year, this.model.month, this.dateC.))

  // selectToday() {
  //   this.model = this.calendar.getToday();
  // }

  // onDateSelection(date: NgbDate) {
  //   if (!this.fromDate && !this.toDate) {
  //     this.fromDate = date;
  //   } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
  //     this.toDate = date;
  //   } else {
  //     this.toDate = null;
  //     this.fromDate = date;
  //   }
  // }

  // isHovered(date: NgbDate) {
  //   return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  // }

  // isInside(date: NgbDate) {
  //   return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  // }

  // isRange(date: NgbDate) {
  //   return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  // }
  ngOnInit(): void {
  }

}
