import { HttpParams } from '@angular/common/http';

export class ReportFilter {

    id: number;
    id_partner: number;
    id_service: number;
    id_plan: number;
    since_date: string;
    until_date: string;
    del: number;


    constructor(filter?: ReportFilter) {
        if (filter) {
            this.id = filter.id;
            this.id_partner = filter.id_partner;
            this.id_service = filter.id_service;
            this.id_plan = filter.id_plan;
            this.since_date = filter.since_date;
            this.until_date = filter.until_date;
            this.del = filter.del;
        }
    }

    getHttpParams(httpParams = new HttpParams()): HttpParams {
        if (this.id_partner) {
            httpParams = httpParams.set('id_partner', this.id_partner.toString());
        }
        if (this.id_service) {
            httpParams = httpParams.set('id_service', this.id_service.toString());
        }
        if (this.id) {
            httpParams = httpParams.set('id', this.id.toString());
        }
        if (this.del) {
            httpParams = httpParams.set('del', this.del.toString());
        }
        if (this.id_plan) {
            httpParams = httpParams.set('id_plan', this.id_plan.toString());
        }
        if (this.until_date) {
            httpParams = httpParams.set('until_date', this.until_date);
        }
        if (this.since_date) {
            httpParams = httpParams.set('since_date', this.since_date);
        }
        return httpParams;
    }
}