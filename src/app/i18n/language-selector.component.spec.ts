import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { I18nService } from './i18n.service';
import { LanguageSelectorComponent } from './language-selector.component';

class MockI18nService {
  supportedLanguages: string[] = ['zh-HK', 'zh-TW'];
  private lang = '';

  set language(language: string) {
    this.lang = language;
  }

  get language(): string {
    return this.lang;
  }
}

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;
  let i18nService: I18nService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, FlexLayoutModule, MaterialModule, TranslateModule.forRoot()],
      declarations: [LanguageSelectorComponent],
      providers: [{ provide: I18nService, useClass: MockI18nService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSelectorComponent);
    i18nService = TestBed.inject(I18nService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('set language', () => {
    component.setLanguage('en-US');
    expect(i18nService.language).toEqual('en-US');
  });

  it('get current language should equal to i18n service language', () => {
    i18nService.language = 'zh-HK';
    expect(component.currentLanguage).toEqual(i18nService.language);
  });

  it('get languages should equal to i18n service supported languages', () => {
    expect(component.languages).toEqual(i18nService.supportedLanguages);
  });
});
