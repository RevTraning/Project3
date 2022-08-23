import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerApComponent } from './datepicker-ap.component';

describe('DatepickerApComponent', () => {
  let component: DatepickerApComponent;
  let fixture: ComponentFixture<DatepickerApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerApComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
