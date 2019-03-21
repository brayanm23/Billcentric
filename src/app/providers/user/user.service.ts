import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { BaseService } from '../../services/base.service';
import { UserProvider } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static readonly BASE_URL: string = BaseService.HOST + '/user';
    constructor(private http: Http
    ) { }

    getById(id: number): Observable<UserProvider> {
        console.log(UserService.BASE_URL + '/' + id);
        return this.http.get(UserService.BASE_URL + '/' + id, {headers: BaseService.createAuthorizationHeader()})
            .map(BaseService.extractData)
            .catch(BaseService.handleError);
    }

    getByEmail(email: string): Observable<UserProvider> {
        return this.http.get(UserService.BASE_URL + '/email/' + email, {headers: BaseService.createAuthorizationHeader()})
            .map(BaseService.extractData)
            .catch(BaseService.handleError);
    }

    updatePassword(obj: any): Observable<any> {
        return this.http.patch(UserService.BASE_URL + '/' + obj.id + '/password', obj, {headers: BaseService.createAuthorizationHeader()})
            .map(BaseService.extractData)
            .catch(BaseService.handleErrorUpdate);
    }
}
