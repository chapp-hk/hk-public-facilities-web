import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facility } from './facility';

@Injectable()
export class FacilitiesService {
  constructor(private httpClient: HttpClient) {}

  getBasketballCourts(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>('/datagovhk/facility/facility-bkbc.json');
  }
}
