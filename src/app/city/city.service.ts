import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { City } from '../models/city';
import { BaseService } from '../services/base.service';

@Injectable({
  providedIn: 'root'
})
export class CityService extends BaseService {

  private  static readonly BASE_URL: string = BaseService.HOST + '/city' ;

    constructor(private http: Http) {
      super();
  }

    getByCountry(id: number): Observable <City[]> {
        return this.http.get(CityService.BASE_URL + '/country/' + id, {headers: BaseService.createAuthorizationHeader()})
            .pipe(
                map(BaseService.extractDataFull)
                , catchError(BaseService.handleError))
            ;
    }

    getCity(id: number): Observable <City> {
        return this.http.get(CityService.BASE_URL + '/' + id, {headers: BaseService.createAuthorizationHeader()})
            .pipe(
                map(BaseService.extractData)
                , catchError(BaseService.handleError))
            ;
    }
}
