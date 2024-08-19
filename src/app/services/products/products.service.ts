import {HttpClient} from "@angular/common/http"
import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { GetAllProductsResponse } from "src/app/models/interfaces/products/responses/GetAllProductsResponse";
import { environment } from "src/environments/environment.prod";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private API_URL = environment.API_URL

  constructor(private http: HttpClient) { }

  getAllProductsIndex(): Observable<Array<GetAllProductsResponse>>{
    return this.http.get<Array<GetAllProductsResponse>>(`${this.API_URL}/products/find/find?category=&limit=12&skip=0`)
  }

}