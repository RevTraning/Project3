import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSplashPageComponent } from './patient-splash-page.component';

describe('PatientSplashPageComponent', () => {
  let component: PatientSplashPageComponent;
  let fixture: ComponentFixture<PatientSplashPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSplashPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientSplashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
