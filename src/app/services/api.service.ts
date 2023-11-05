import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HealthResponse } from 'server/models/health-response.model'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly API_URL = 'http://localhost:4200'

  constructor(private http: HttpClient) {}

  checkHealth(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(this.API_URL + '/api/health')
  }
}
