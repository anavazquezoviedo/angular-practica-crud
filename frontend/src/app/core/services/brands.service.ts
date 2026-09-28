import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../models/brand.model';
import { environment } from '../../../enviroments/enviroments';
import { API_ENDPOINTS } from '../config/api-endpoints';
import { Model } from '../models/model.model';



@Injectable({
  providedIn: 'root',
})
export class BrandsService {

    private readonly apiURL = environment.apiBaseUrl;
    private readonly brandListUrl = this.apiURL + API_ENDPOINTS.brand;

   constructor(private http: HttpClient) {}
    //Getbrand
    getBrands() {
        return this.http.get<Brand[]>(this.brandListUrl);
    }

    //getBrandById
    getModelsByBrandId(id: string) {
        const url = `${this.brandListUrl}/${id}/models`;
        return this.http.get<Model[]>(url);
    }
}
