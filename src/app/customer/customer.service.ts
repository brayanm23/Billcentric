import { Injectable } from '@angular/core';
import { BaseService } from '../services/base.service';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { StatusService } from '../status/status.service';
import { PartnerService } from '../partner/partner.service';
import { Service } from '../models/service';
import { Plan } from '../models/plan';
import { Partner } from '../models/partner';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService {

    BASE_URL: string = BaseService.HOST + '/partner/' + JSON.parse(localStorage.getItem('data')).user + '/customer';

    constructor(
        private http: Http,
        private partnerService: PartnerService,
        private statusService: StatusService ) {
        super();
    }

    getAll(requestOptions: RequestOptions = new RequestOptions()): Observable<Customer[]> {
        requestOptions.headers = CustomerService.createAuthorizationHeader();
        return this.http.get(BaseService.HOST + '/customer', requestOptions)
            .pipe(
                map(CustomerService.extractDataFull)
                , catchError(CustomerService.handleError)
            );
    }

    getAllSearch(requestOptions: RequestOptions = new RequestOptions()): Observable<Customer[]> {
        requestOptions.headers = CustomerService.createAuthorizationHeader();
        return this.http.get(BaseService.HOST + '/customer/full/search', requestOptions)
            .pipe(
                map(CustomerService.extractDataFull)
                , catchError(CustomerService.handleError)
            );
    }

    getByPartner(requestOptions: RequestOptions = new RequestOptions()): Observable<Customer[]> {
        this.BASE_URL = BaseService.HOST + '/partner/' + JSON.parse(localStorage.getItem('data')).user + '/customer';
        requestOptions.headers = CustomerService.createAuthorizationHeader();
        return this.http.get(this.BASE_URL, requestOptions)
            .pipe(
                map(CustomerService.extractDataFull)
                , catchError(CustomerService.handleError)
            );
    }

    getByService(id: number, requestOptions: RequestOptions = new RequestOptions()): Observable<Customer[]> {
        this.BASE_URL = BaseService.HOST + '/partner/' + JSON.parse(localStorage.getItem('data')).user + '/customer';
        return this.http.get(this.BASE_URL + '/service/' + id, {headers: CustomerService.createAuthorizationHeader()})
            .pipe(
                map(CustomerService.extractDataFull)
                , catchError(CustomerService.handleError)
            );

    }

    getByPlan(id: number, requestOptions: RequestOptions = new RequestOptions()): Observable<Customer[]> {
        this.BASE_URL = BaseService.HOST + '/partner/' + JSON.parse(localStorage.getItem('data')).user + '/customer';
        return this.http.get(this.BASE_URL + '/plan/' + id, {headers: CustomerService.createAuthorizationHeader()})
            .pipe(
                map(CustomerService.extractDataFull)
                , catchError(CustomerService.handleError)
            );
    }

    getByStatus(id: number, requestOptions: RequestOptions = new RequestOptions()): Observable<Customer[]> {
        this.BASE_URL = BaseService.HOST + '/partner/' + JSON.parse(localStorage.getItem('data')).user + '/customer';
        return this.http.get(this.BASE_URL + '/status/' + id, {headers: CustomerService.createAuthorizationHeader()})
            .pipe(
                map(CustomerService.extractDataFull)
                , catchError(CustomerService.handleError)
            );
    }

    getByDNI(dni: string, requestOptions: RequestOptions = new RequestOptions()): Observable<Customer[]> {
        this.BASE_URL = BaseService.HOST + '/partner/' + JSON.parse(localStorage.getItem('data')).user + '/customer';
        return this.http.get(this.BASE_URL + '/ident/' + dni, {headers: CustomerService.createAuthorizationHeader()})
            .pipe(
                map(CustomerService.extractDataFull)
                , catchError(CustomerService.handleError)
            );
    }

    getByPhone(phone: string, requestOptions: RequestOptions = new RequestOptions()): Observable<Customer[]> {
        this.BASE_URL = BaseService.HOST + '/partner/' + JSON.parse(localStorage.getItem('data')).user + '/customer';
        return this.http.get(this.BASE_URL + '/phone/' + phone, {headers: CustomerService.createAuthorizationHeader()})
            .pipe(
                map(CustomerService.extractDataFull)
                , catchError(CustomerService.handleError)
            );
    }

    getByEmail(email: string, requestOptions: RequestOptions = new RequestOptions()): Observable<Customer[]> {
        this.BASE_URL = BaseService.HOST + '/partner/' + JSON.parse(localStorage.getItem('data')).user + '/customer';
        return this.http.get(this.BASE_URL + '/email/' + email, {headers: CustomerService.createAuthorizationHeader()})
            .pipe(
                map(CustomerService.extractDataFull)
                , catchError(CustomerService.handleError)
            );
    }

    getById(id: number, requestOptions: RequestOptions = new RequestOptions()): Observable<Customer> {
        this.BASE_URL = BaseService.HOST + '/partner/' + JSON.parse(localStorage.getItem('data')).user + '/customer';
        return this.http.get(this.BASE_URL + '/' + id, {headers: CustomerService.createAuthorizationHeader()})
            .pipe(
                map(CustomerService.extractData)
                , catchError(CustomerService.handleError)
            );
    }
}
