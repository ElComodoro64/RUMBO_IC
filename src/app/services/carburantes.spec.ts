import { TestBed } from '@angular/core/testing';

import { Carburantes } from './carburantes';

describe('Carburantes', () => {
  let service: Carburantes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Carburantes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
