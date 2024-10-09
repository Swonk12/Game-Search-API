import { TestBed } from '@angular/core/testing';

import { ServeiApiService } from './servei-api.service';

describe('ServeiApiService', () => {
  let service: ServeiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
