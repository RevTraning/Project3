import { TestBed } from '@angular/core/testing';

import { ApptFormService } from './appt-form.service';

describe('ApptFormService', () => {
  let service: ApptFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApptFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
