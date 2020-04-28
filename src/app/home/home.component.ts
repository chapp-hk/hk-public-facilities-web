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
  facilityTypes = facilityTypeJson;
  displayedColumns: string[] = ['Name_en', 'Address_en'];
  facilities: Facility[] = [];

  constructor(private facilitiesService: FacilitiesService) {}

  ngOnInit() {}

  onFacilityTypeSelected(type: string) {
    this.facilitiesService.getFacilities(type).subscribe((facilities) => (this.facilities = facilities));
  }
}
