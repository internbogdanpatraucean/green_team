import { TestBed, inject } from '@angular/core/testing';

import { RegisterServiceService } from './register-service.service';

describe('RegisterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterServiceService]
    });
  });

  it('should be created', inject([RegisterServiceService], (service: RegisterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
