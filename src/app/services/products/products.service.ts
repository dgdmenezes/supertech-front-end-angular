import {HttpClient} from "@angular/common/http"
import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
//models
import { GetAllProductsResponse } from "src/app/models/interfaces/products/responses/GetAllProductsResponse";
import { GetProductData } from "src/app/models/interfaces/products/responses/GetProductData";
import {GetProductsCounter} from "src/app/models/interfaces/products/responses/GetProductsCounter"
//enviroment
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

  getSuggestedeProductData():Observable<Array<GetAllProductsResponse>>{
    return this.http.get<Array<GetAllProductsResponse>>(`${this.API_URL}/products/index/index?skip=0&limit=4`)
  }

  getProductOneProductData(id:string): Observable<GetProductData>{
    return this.http.get<GetProductData>(`${this.API_URL}/products/${id}`)
  }

  getSearchBarProducts(searchValue:string):Observable<Array<GetAllProductsResponse>>{
    return this.http.get<Array<GetAllProductsResponse>>(`${this.API_URL}/products/searchbar/find?tags=${searchValue}&limit=3&skip=0`)

  }

  getSearchProducts(searchValue:string):Observable<Array<GetAllProductsResponse>>{
    return this.http.get<Array<GetAllProductsResponse>>(`${this.API_URL}/products/searchbar/find?tags=${searchValue}&limit=12&skip=0`)

  }

  getCategoryDataAPI(categoryName:string, skip:number, limit:number):Observable<Array<GetAllProductsResponse>>{
    return this.http.get<Array<GetAllProductsResponse>>(`${this.API_URL}/products/find/find?category=${categoryName}&skip=${skip}&limit=${limit}`)
  }
  getAmountProductsByCategoryAPI(categoryName:string):Observable<Array<GetProductsCounter>>{
    return this.http.get<Array<GetProductsCounter>>(`${this.API_URL}/products/find/count?category=${categoryName}`)

    //http://localhost:3001/products/find/count?category=notebooK
  }

}
