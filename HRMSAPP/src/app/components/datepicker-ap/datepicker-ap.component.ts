import { Component, OnInit , Injectable} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {NgbDate, NgbCalendar, NgbDateNativeUTCAdapter,  NgbDateAdapter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}
@Component({
  selector: 'app-datepicker-ap',
  templateUrl: './datepicker-ap.component.html',
  styleUrls: ['./datepicker-ap.component.css'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter}
  ]
})
export class DatepickerApComponent implements OnInit {

  model1: string;
  // constructor(){}
  

  fromDate: NgbDate;
  date: {year: number, month: number};
  toDate: NgbDate | null = null;

  fromDateC: any = this.cunverter.toModel;
  utcDate: Date= new Date(Date.UTC(this.fromDateC.year, this.fromDateC.month, this.fromDateC.day));
  constructor(private calendar: NgbCalendar, private cunverter: NgbDateNativeUTCAdapter, private dateAdapter: NgbDateAdapter<string>) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  get today() {
    return this.dateAdapter.toModel(this.calendar.getToday())!;
  }
  
  ngOnInit(): void {
  }

}
