import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLabResultsComponent } from './view-lab-results.component';

describe('ViewLabResultsComponent', () => {
  let component: ViewLabResultsComponent;
  let fixture: ComponentFixture<ViewLabResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLabResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLabResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
