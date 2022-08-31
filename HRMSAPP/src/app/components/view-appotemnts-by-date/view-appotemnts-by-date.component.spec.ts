import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppotemntsByDateComponent } from './view-appotemnts-by-date.component';

describe('ViewAppotemntsByDateComponent', () => {
  let component: ViewAppotemntsByDateComponent;
  let fixture: ComponentFixture<ViewAppotemntsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppotemntsByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAppotemntsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
