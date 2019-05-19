import { TestBed } from '@angular/core/testing';

import { MushroomService } from './mushroom.service';

describe('MushroomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MushroomService = TestBed.get(MushroomService);
    expect(service).toBeTruthy();
  });
});
