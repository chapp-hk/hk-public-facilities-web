import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-home-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit {
  @Input()
  facilityTypes: any;
  @Output()
  selectedFacility: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onFacilityOptionSelected(type: string) {
    this.selectedFacility.emit(type);
  }
}
