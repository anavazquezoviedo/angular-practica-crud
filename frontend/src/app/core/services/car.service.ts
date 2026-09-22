import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResponseDto } from '../models/paginated-response-dto.model';
import { CarSummary } from '../models/car-summary.model';

import { environment } from '../../../enviroments/enviroments';
import { API_ENDPOINTS } from '../config/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private readonly apiURL = environment.apiBaseUrl;
  private readonly carListUrl = this.apiURL + API_ENDPOINTS.cars;

  constructor(private http: HttpClient) {}

  getCars(): Observable<PaginatedResponseDto<CarSummary>> {
    return this.http.get<PaginatedResponseDto<CarSummary>>(this.carListUrl);
  }

  getCarById(id: string) {}
}
