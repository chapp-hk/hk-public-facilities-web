import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { FacilitiesService } from './facilities.service';
import { Facility } from './facility';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  displayedColumns: string[] = ['Name_en', 'Address_en'];
  facilities: Facility[] = [];

  constructor(private facilitiesService: FacilitiesService) {}

  ngOnInit() {
    this.facilitiesService.getBasketballCourts().subscribe((facilities) => (this.facilities = facilities));
  }
}
