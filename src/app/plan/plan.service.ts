import { Injectable } from '@angular/core';
import { BaseService } from '../services/base.service';
import { Plan } from '../models/plan';
import {Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {ServicesService} from '../service/services.service';
import { Service } from '../models/service';
import {PartnerService } from '../partner/partner.service';
import { Partner } from '../models/partner';

@Injectable({
  providedIn: 'root'
})
export class PlanService extends BaseService {
    private  static readonly BASE_URL: string = BaseService.HOST + '/plan';
  constructor(private http: Http,
              public serviceS: ServicesService,
              public partnerService: PartnerService) {
      super();
  }

    getByService(id: number, requestOptions: RequestOptions = new RequestOptions()): Observable<Plan[]> {
        requestOptions.headers = PlanService.createAuthorizationHeader();
        return this.http.get(PlanService.BASE_URL + '/service/' + id, requestOptions)
            .map(PlanService.extractData)
            .catch(PlanService.handleError);
    }

    getById(id: number): Observable<Plan> {
        return this.http.get(PlanService.BASE_URL + '/' + id,{headers: BaseService.createAuthorizationHeader()})
            .map(BaseService.extractData)
            .catch(BaseService.handleError);
    }

    findService(id: number): Observable<Service> {
        return this.serviceS.getById(id);
    }

    findPartner(id: number): Observable<Partner> {
        return this.partnerService.getPartnerById(id);
    }
}
