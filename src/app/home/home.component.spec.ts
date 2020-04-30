import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
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
import { HttpErrorResponse } from '@angular/common/http';

describe('HomeComponent', () => {
  const requestUrl = '/api/datagovhk/facility/any-type';
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpTestingController: HttpTestingController;

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
      providers: [FacilitiesService],
    }).compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should call get facilities and set facilites value', () => {
    const expectedFacilities = [
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

    component.onFacilityTypeSelected('any-type');

    const request = httpTestingController.expectOne(requestUrl);

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    request.flush(expectedFacilities);

    expect(component.facilities).toEqual(expectedFacilities);
  });

  it('should return error when http error', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });

    component.onFacilityTypeSelected('any-type');

    const request = httpTestingController.expectOne(requestUrl);

    request.flush('error', errorResponse);

    expect(component.facilities).toEqual([]);
  });
});
