import { TestBed } from '@angular/core/testing';

import { DoctorHttpService } from './doctor-http.service';

describe('DoctorHttpService', () => {
  let service: DoctorHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
