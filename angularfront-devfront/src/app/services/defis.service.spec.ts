import { TestBed } from '@angular/core/testing';

import { DefisService } from './defis.service';

describe('DefisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefisService = TestBed.get(DefisService);
    expect(service).toBeTruthy();
  });
});
