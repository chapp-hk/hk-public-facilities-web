import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorComponent } from './selector.component';
import { TranslateModule } from '@ngx-translate/core';

describe('SelectorComponent', () => {
  let component: SelectorComponent;
  let fixture: ComponentFixture<SelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [SelectorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display facility options', () => {
    // Arrange
    const element = fixture.nativeElement;

    // Act
    fixture.componentInstance.facilityTypes = [
      {
        name_en: 'some en name',
        name_zh: 'some zh name',
        value: 'some value',
      },
    ];
    fixture.detectChanges();

    // Assert
    const matOption = element.querySelectorAll('mat-option')[0];
    expect(matOption.innerHTML.length).toBeGreaterThan(0);
  });

  it('should emit on facility option selected', () => {
    spyOn(component.selectedFacility, 'emit');
    component.onFacilityOptionSelected('facilityType');
    expect(component.selectedFacility.emit).toHaveBeenCalledWith('facilityType');
  });
});
