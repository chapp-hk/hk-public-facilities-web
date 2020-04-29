import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { Angulartics2Module } from 'angulartics2';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { HomeComponent } from './home.component';
import { FacilitiesService } from './facilities.service';
import { Facility } from './facility';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // Create a fake Facilities Service object with a `getFacilities()` spy
  const facilitiesService = jasmine.createSpyObj('FacilitiesService', ['getFacilities']);
  let expectedFacilities: Facility[];
  let getFacilitiesSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
        RouterTestingModule,
        Angulartics2Module.forRoot(),
        CoreModule,
        SharedModule,
        HttpClientTestingModule,
      ],
      declarations: [HomeComponent],
      providers: [{ provide: FacilitiesService, useValue: facilitiesService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

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

    // Make the spy return a synchronous Observable with the test data
    getFacilitiesSpy = facilitiesService.getFacilities.and.returnValue(of(expectedFacilities));
  });

  it('should call get facilities and set facilites value', () => {
    component.onFacilityTypeSelected('type');

    expect(getFacilitiesSpy.calls.any()).toBe(true, 'getFacilities called');
    expect(component.facilities).toEqual(expectedFacilities);
  });
});
