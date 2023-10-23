import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Health } from '../models/health.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly API_URL = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  checkHealth(): Observable<Health> {
    return this.http.get<Health>(this.API_URL + '/api/health');
  }
}
