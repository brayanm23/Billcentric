import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs';
import { BaseService } from '../services/base.service';
import { Country } from '../models/country';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseService {

    private static readonly BASE_URL: string = BaseService.HOST + '/country';

    constructor( private http: Http ) { super(); }

    getAll(): Observable<Country[]> {
        return this.http.get(CountryService.BASE_URL, {headers: BaseService.createAuthorizationHeader()})
            .pipe(
                map(BaseService.extractDataFull)
                , catchError(BaseService.handleError)
            );
    }
    getByID(id: number): Observable <Country> {
        return this.http.get(CountryService.BASE_URL + '/' + id, {headers: BaseService.createAuthorizationHeader()})
            .pipe(
                map(BaseService.extractData)
                , catchError(BaseService.handleError)
            );
    }
}
