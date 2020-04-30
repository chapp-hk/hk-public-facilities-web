import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from './facilities.service';
import { Facility } from './facility';
import facilityTypeJson from '../../assets/facility-types.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  facilities: Facility[] = [];
  readonly facilityTypes = facilityTypeJson;
  readonly displayedColumns: string[] = ['Name_en', 'Address_en'];

  constructor(private facilitiesService: FacilitiesService) {}

  ngOnInit() {}

  onFacilityTypeSelected(type: string) {
    this.facilities = [];
    this.isLoading = true;

    this.facilitiesService
      .getFacilities(type)
      .subscribe(
        (facilities) => this.onGetFacilitiesSuccess(facilities),
        (error) => this.onGetFacilitiesError(error)
      )
      .add(() => {
        this.isLoading = false;
      });
  }

  private onGetFacilitiesSuccess(facilities: Facility[]) {
    this.facilities = facilities;
  }

  private onGetFacilitiesError(error: any) {}
}
