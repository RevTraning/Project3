import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentInProgressComponent } from './appointment-in-progress.component';

describe('AppointmentInProgressComponent', () => {
  let component: AppointmentInProgressComponent;
  let fixture: ComponentFixture<AppointmentInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentInProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
