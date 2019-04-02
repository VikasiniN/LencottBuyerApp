import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppSetting } from '../config/appSetting';
import {FooterComponent} from './footer/footer.component';
import {Footer} from './footer/footer.model';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  serviceUrl: string = AppSetting.serviceUrl;
constructor( private httpClient: HttpClient) { }

    // get footer
    getFooterDetails(): Observable<any> {
      const categoryUrl = 'footerDetails';
      const url: string = this.serviceUrl + categoryUrl;
      return this.httpClient.get<Footer>(url);

    }
  }