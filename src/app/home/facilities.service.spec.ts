import { TestBed } from '@angular/core/testing';

import { FacilitiesService } from './facilities.service';
import { HttpClientModule } from '@angular/common/http';

describe('FacilitiesService', () => {
  let service: FacilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FacilitiesService],
    });
    service = TestBed.inject(FacilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
