import { FacilitiesService } from './facilities.service';
import { Facility } from './facility';
import { of } from 'rxjs';

describe('FacilitiesService', () => {
  let service: FacilitiesService;
  let httpClientSpy: { get: jasmine.Spy };
  let expectedFacilities: Facility[];

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new FacilitiesService(httpClientSpy as any);

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

  it('should return expected facilities by calling once with correct type', () => {
    const type = 'some_type';
    httpClientSpy.get.and.returnValue(of(expectedFacilities));

    service
      .getFacilities(type)
      .subscribe(
        (facilities) => expect(facilities).toEqual(expectedFacilities, 'should return expected facilities'),
        fail
      );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.get).toHaveBeenCalledWith(`${service.urlPath}${type}`);
  });
});
