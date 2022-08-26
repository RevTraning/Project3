import { TestBed } from '@angular/core/testing';

import { SymptomCheckerAPIService } from './symptom-checker-api.service';

describe('SymptomCheckerAPIService', () => {
  let service: SymptomCheckerAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymptomCheckerAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
