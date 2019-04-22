import { Injectable } from '@angular/core';
import { BaseService } from '../services/base.service';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { Customer_has_plans } from '../models/customer_has_plan';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerHasPlansService extends BaseService {

    BASE_URL: string = BaseService.HOST + '/hasplan';

    constructor(
        private http: Http
    ) {
        super();
    }

    getAll(requestOptions: RequestOptions = new RequestOptions()): Observable<Customer_has_plans[]> {
        requestOptions.headers = CustomerHasPlansService.createAuthorizationHeader();
        return this.http.get(this.BASE_URL, requestOptions)
            .pipe(
                map(CustomerHasPlansService.extractDataFull)
                , catchError(CustomerHasPlansService.handleError)
            );
    }

    getByPlan(id: number, requestOptions: RequestOptions = new RequestOptions()): Observable<Customer_has_plans[]> {
        requestOptions.headers = CustomerHasPlansService.createAuthorizationHeader();
        return this.http.get(this.BASE_URL + '/plan/' + id, requestOptions)
            .pipe(
                map(CustomerHasPlansService.extractDataFull)
                , catchError(CustomerHasPlansService.handleError)
            );
    }

    getByStatus(id: number, requestOptions: RequestOptions = new RequestOptions()): Observable<Customer_has_plans[]> {
        requestOptions.headers = CustomerHasPlansService.createAuthorizationHeader();
        return this.http.get(this.BASE_URL + '/status/' + id, requestOptions)
            .pipe(
                map(CustomerHasPlansService.extractDataFull)
                , catchError(CustomerHasPlansService.handleError)
            );
    }

    getByService(id: number, requestOptions: RequestOptions = new RequestOptions()): Observable<Customer_has_plans[]> {
        requestOptions.headers = CustomerHasPlansService.createAuthorizationHeader();
        return this.http.get(this.BASE_URL + '/service/' + id, requestOptions)
            .pipe(
                map(CustomerHasPlansService.extractDataFull)
                , catchError(CustomerHasPlansService.handleError)
            );
    }

    getByCustomer(id: number, requestOptions: RequestOptions = new RequestOptions()): Observable<Customer_has_plans[]> {
        requestOptions.headers = CustomerHasPlansService.createAuthorizationHeader();
        return this.http.get(this.BASE_URL + '/customer/' + id, requestOptions)
            .pipe(
                map(CustomerHasPlansService.extractDataFull)
                , catchError(CustomerHasPlansService.handleError)
            );
    }

    getByCustomerAndPlan(idcus: number, idplan: number, requestOptions: RequestOptions = new RequestOptions()):
        Observable<Customer_has_plans> {
        requestOptions.headers = CustomerHasPlansService.createAuthorizationHeader();
        return this.http.get(this.BASE_URL + '/customer/' + idcus + '/plan/' + idplan, requestOptions)
            .pipe(
                map(CustomerHasPlansService.extractDataFull)
                , catchError(CustomerHasPlansService.handleError)
            );
    }

    getById(id: number, requestOptions: RequestOptions = new RequestOptions()): Observable<Customer_has_plans> {
        requestOptions.headers = CustomerHasPlansService.createAuthorizationHeader();
        return this.http.get(this.BASE_URL + '/' + id, requestOptions)
            .pipe(
                map(CustomerHasPlansService.extractData)
                , catchError(CustomerHasPlansService.handleError)
            );
    }
}
