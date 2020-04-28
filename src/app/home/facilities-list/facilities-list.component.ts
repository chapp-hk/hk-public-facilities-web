import { Component, OnInit, Input } from '@angular/core';
import { Facility } from '../facility';

@Component({
  selector: 'app-home-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.scss'],
})
export class FacilitiesListComponent implements OnInit {
  @Input()
  displayedColumns: string[];
  @Input()
  facilities: Facility[];

  constructor() {}

  ngOnInit(): void {}
}
