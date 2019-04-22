import { TestBed } from '@angular/core/testing';

import { CustomerHasPlansService } from './customer-has-plans.service';

describe('CustomerHasPlansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerHasPlansService = TestBed.get(CustomerHasPlansService);
    expect(service).toBeTruthy();
  });
});
