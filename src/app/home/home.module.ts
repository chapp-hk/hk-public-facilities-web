import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Angulartics2Module } from 'angulartics2';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FacilitiesService } from './facilities.service';
import { SelectorComponent } from './selector/selector.component';
import { FacilitiesListComponent } from './facilities-list/facilities-list.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    Angulartics2Module,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent, SelectorComponent, FacilitiesListComponent],
  providers: [FacilitiesService],
})
export class HomeModule {}
