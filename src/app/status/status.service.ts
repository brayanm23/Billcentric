import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { BaseService } from '../services/base.service';
import { Status } from '../models/status';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatusService extends BaseService {

    private  readonly BASE_URL: string = BaseService.HOST;

    constructor(private http: Http) { super(); }

    // Funcion para buscar el conjunto de status creados para el tipo que se le solicite
    getStatusByType(val: number): Observable<Status> {

        let status;
        switch (val) {
            case 1:
                status = '/status/type/partner'; // buscamos los status de partner
                break;

            case 2:
                status = '/status/type/service'; // buscamos los status de los servicios
                break;

            case 3:
                status = '/status/type/plan'; // buscamos status type plan
                break;
            case 4:
                status = '/status/type/customer'; // buscamos status type customer
                break;
            case 5:
                status = '/status/type/customerhasplan'; // buscamos status type customer hs plan
                break;

            default:
                status = null
                break;
        }

        return this.http.get(this.BASE_URL + status, {headers: BaseService.createAuthorizationHeader()})
            .pipe(
                map(BaseService.extractData)
                , catchError(BaseService.handleError)
            );
    }

    // Este servicio posee 2 parametros : value = Valor del estatus, type = tipo del estatus a retornar ...
    // Retorna el estatus que cumpla con ambos parametros
    getStatusByValue(value: number, type: String): Observable<Status> {
        const status = '/status/type/' + type + '/value/' + value;
        return this.http.get(this.BASE_URL + status, {headers: BaseService.createAuthorizationHeader()})
            .pipe(
                map(BaseService.extractData)
                , catchError(BaseService.handleError)
            );
    }
}
