import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import facilityTypeJson from '../../../assets/facility-types.json';

@Component({
  selector: 'app-home-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit {
  @Output()
  facilityType: EventEmitter<string> = new EventEmitter();
  facilityTypes = facilityTypeJson;

  constructor() {}

  ngOnInit(): void {}

  onFacilityOptionSelected(type: string) {
    this.facilityType.emit(type);
  }
}
