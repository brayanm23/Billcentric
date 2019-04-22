import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, RequestOptions} from '@angular/http';
import { BaseService } from '../services/base.service';
import { Partner } from '../models/partner';
import { Service } from '../models/service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnerService extends BaseService {
    private static readonly BASE_URL: string = BaseService.HOST;
    public token: string;

  constructor(public http: Http,
              public httpc: HttpClient) {
      super();
  }

  getPartnersByUserId(requestOptions: RequestOptions = new RequestOptions()): Observable<Partner[]> {
        requestOptions.headers = PartnerService.createAuthorizationHeader();
        return this.http
            .get(PartnerService.BASE_URL + '/partner/user', requestOptions)
            .map(PartnerService.extractData)
            .catch(PartnerService.handleError);
    }

    getPartnerById(id: number): Observable<Partner> {
        return this.http.get(PartnerService.BASE_URL + '/partner/' + id, {headers: PartnerService.createAuthorizationHeader()})
            .map(PartnerService.extractData)
            .catch(PartnerService.handleError);
    }
}
