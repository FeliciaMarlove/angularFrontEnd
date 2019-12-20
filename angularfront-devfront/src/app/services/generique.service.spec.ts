import { TestBed } from '@angular/core/testing';

import { GeneriqueService } from './generique.service';

describe('GeneriqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneriqueService = TestBed.get(GeneriqueService);
    expect(service).toBeTruthy();
  });
});
