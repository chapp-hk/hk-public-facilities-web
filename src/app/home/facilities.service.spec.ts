import { TestBed } from '@angular/core/testing';

import { FacilitiesService } from './facilities.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Facility } from './facility';

describe('FacilitiesService', () => {
  let service: FacilitiesService;
  let httpTestingController: HttpTestingController;
  let expectedFacilities: Facility[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FacilitiesService],
    });
    service = TestBed.inject(FacilitiesService);
    httpTestingController = TestBed.inject(HttpTestingController);

    expectedFacilities = [
      {
        District_en: 'some en district',
        District_cn: 'some cn district',
        Name_en: 'some en name',
        Name_cn: 'some cn name',
        Address_en: 'some en address',
        Address_cn: 'some cn address',
        GIHS: 'some gihs',
        Court_no_en: '6',
        Court_no_cn: '6',
        Facilities_en: 'some en facilities',
        Facilities_cn: 'some cn facilites',
        Ancillary_facilities_en: 'some en facilities',
        Ancillary_facilities_cn: 'some cn facilities',
        Opening_hours_en: 'some en opening hours',
        Opening_hours_cn: 'some cn opening hours',
        Maintenance_day_en: 'some en maintenance day',
        Maintenance_day_cn: 'some cn maintenance day',
        Phone: 'some phone',
        Remarks_en: 'some en remarks',
        Remarks_cn: 'some cn remarks',
        Photo_1: 'some photo 1',
        Photo_2: 'some photo 2',
        Photo_3: 'some photo 3',
        Longitude: 'some long',
        Latitude: 'some lat',
      },
    ] as Facility[];
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should return expected facilities by calling once', () => {
    service
      .getFacilities('type')
      .subscribe(
        (facilities) => expect(facilities).toEqual(expectedFacilities, 'should return expected employees'),
        fail
      );

    const req = httpTestingController.expectOne('/datagovhk/facility/type');
    expect(req.request.method).toEqual('GET');

    req.flush(expectedFacilities); //Return expectedEmps
  });
});
