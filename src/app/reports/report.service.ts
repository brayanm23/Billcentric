import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Http, RequestOptions} from '@angular/http';
import { BaseService } from '../services/base.service';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService extends BaseService {

    private readonly BASE_URL: string = BaseService.HOST + '/invoice';
    private readonly BASE_URL2: string = BaseService.HOST + '/payment';

    constructor(
        private http: Http
    ) { super(); }

    getReportInvoices(requestOptions: RequestOptions = new RequestOptions()): Observable<any[]> {
        requestOptions.headers = ReportService.createAuthorizationHeader();
        return this.http.get(this.BASE_URL + '/report', requestOptions)
            .pipe(
                map(ReportService.extractDataFull)
                , catchError(ReportService.handleError)
            );
    }

    getPaymentsByInvoice(requestOptions: RequestOptions = new RequestOptions(), id_invoice): Observable<any[]> {
        requestOptions.headers = ReportService.createAuthorizationHeader();
        return this.http.get(this.BASE_URL2 + '/list/' + id_invoice.toString(), requestOptions)
            .pipe(
                map(ReportService.extractDataFull)
                , catchError(ReportService.handleError)
            );
    }

    getReportInvoicesCharged(requestOptions: RequestOptions = new RequestOptions()): Observable<any[]> {
        requestOptions.headers = ReportService.createAuthorizationHeader();
        return this.http.get(this.BASE_URL + '/report/charged', requestOptions)
            .pipe(
                map(ReportService.extractDataFull)
                , catchError(ReportService.handleError)
            );
    }
}
