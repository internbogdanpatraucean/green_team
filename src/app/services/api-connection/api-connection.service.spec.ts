import { TestBed, inject } from '@angular/core/testing';

import { ApiConnectionService } from './api-connection.service';

describe('ApiConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiConnectionService]
    });
  });

  it('should be created', inject([ApiConnectionService], (service: ApiConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
