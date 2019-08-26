import { TestBed } from '@angular/core/testing';

import { UserGaurdService } from './user-gaurd.service';

describe('UserGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserGaurdService = TestBed.get(UserGaurdService);
    expect(service).toBeTruthy();
  });
});
