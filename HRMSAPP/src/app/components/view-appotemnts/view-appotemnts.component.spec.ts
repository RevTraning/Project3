import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppotemntsComponent } from './view-appotemnts.component';

describe('ViewAppotemntsComponent', () => {
  let component: ViewAppotemntsComponent;
  let fixture: ComponentFixture<ViewAppotemntsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppotemntsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAppotemntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
