import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FacilitiesService {
  constructor(private httpClient: HttpClient) {}

  getBasketballCourts(): Observable<string> {
    return this.httpClient.get<string>('/datagovhk/facility/facility-bkbc.json');
  }
}
