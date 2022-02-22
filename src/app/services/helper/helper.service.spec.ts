import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get correct maximum number of hexes', () => {
    // TODO: make tests work and check if it's true. Should be true.
    let radius = 3;
    expect(service.getMaxHexNum(radius)).toEqual(19);

    radius = 2;
    expect(service.getMaxHexNum(radius)).toEqual(7);

    radius = 5;
    expect(service.getMaxHexNum(radius)).toEqual(61);
  })
});
