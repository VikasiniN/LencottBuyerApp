import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppSetting } from '../config/appSetting';
import {Product} from './view-products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  serviceUrl: string = AppSetting.serviceUrl;
  constructor(private httpClient: HttpClient) { }

  // get products
  getAllProducts(): Observable<any> {
    const categoryUrl = 'viewproducts';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Product>(url);
  }


  getProductFilter(): Observable<any> {
    const categoryUrl = 'viewproducts';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Product>(url);
  }

  // filter data

  getFilterData(): Observable<any> {
    const filterURL = 'productSettings/';
    const url: string = this.serviceUrl + filterURL;
    return this.httpClient.get<Product>(url);
  }
}
