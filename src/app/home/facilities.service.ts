import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facility } from './facility';

@Injectable()
export class FacilitiesService {
  urlPath = '/datagovhk/facility/';

  constructor(private httpClient: HttpClient) {}

  getFacilities(type: string): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(`${this.urlPath}${type}`);
  }
}
