import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAppotmentsComponent } from './book-appotments.component';

describe('BookAppotmentsComponent', () => {
  let component: BookAppotmentsComponent;
  let fixture: ComponentFixture<BookAppotmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAppotmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAppotmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
