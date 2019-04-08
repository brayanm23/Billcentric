import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Service } from '../models/service';
import { BaseService } from '../services/base.service';
import { Partner} from '../models/partner';
import { PartnerService } from '../partner/partner.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService extends BaseService {

    private static readonly BASE_URL: string = BaseService.HOST + '/service';

    constructor(
        private http: Http,
        private partnerService: PartnerService
    ) {
        super();
    }

    getServiceByPartner(id: number, requestOptions: RequestOptions = new RequestOptions()): Observable<Service[]> {
        requestOptions.headers = BaseService.createAuthorizationHeader();
        return this.http.get(ServicesService.BASE_URL + '/partner/' + id, requestOptions)
            .map(BaseService.extractData)
            .catch(BaseService.handleError);
    }

    getById(id: number): Observable<Service> {
        return this.http.get(ServicesService.BASE_URL + '/' + id, {headers: BaseService.createAuthorizationHeader()})
            .map(BaseService.extractData)
            .catch(BaseService.handleError);
    }

    findPartner(id:number): Observable<Partner> {
        return this.partnerService.getPartnerById(id);
    }
}
