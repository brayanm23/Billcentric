import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { BaseService } from '../../services/base.service';
import { AccessTokenResponse } from '../utils/accessTokenResponse';
import { AuthorizationRequest } from '../utils/authorizationRequest';


@Injectable()
export class AuthService {

    constructor(public http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    private static readonly BASE_URL: string = BaseService.HOST + '/oauth';

    public token: string;
    // let apiUrl = 'https://dev.hecbill.hecticus.com/rest-auth/';

    private headers: Headers;


    public handleError (error: Response | any) {
        // console.log(error);
        if (error instanceof Response) {

            if (error.status === 400) {
                //   No se pudo actualizar, corriga los parámetros inválidos e intente nuevamente
                return Observable.throw('Email o password es incorrecto, intente nuevamente');
            }
            if (error.status === 401) {
                return Observable.throw('No se pudo actualizar, su contraseña actual es incorrecta');
            }
            if (error.status === 403) {
                //   No se pudo actualizar, corriga los parámetros inválidos e intente nuevamente
                return Observable.throw('No posee permisos suficientes para esta accion, contacte con el administrado');
            }
            if (error.status === 404) {
                return Observable.throw('No se pudo actualizar, registro inexistente');
            }
            if (error.status === 409) {
                return Observable.throw('No se pudo actualizar, corriga los parámetros requeridos o las dependencias inválidas e intente nuevamente');
            }
        }
        return Observable.throw('No se pudo actualizar, consulte con el administrador del sistema');
    }

    login(authorizationRequest: AuthorizationRequest): Observable<AccessTokenResponse> {
        const params = new URLSearchParams();

        params.append('grant_type', 'password');
        params.append('username', authorizationRequest.username);
        params.append('password', authorizationRequest.password);
        params.append('client_id', 'android_app');


        return this.http
            .post(AuthService.BASE_URL + '/token', params, {headers: this.headers})
            .map(BaseService.extractDataFull)
            .catch(this.handleError);
    }

    verifyToken(token: string): Observable<Headers> {
        const headers = new Headers({ 'Authorization': token });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(AuthService.BASE_URL + '/verify', options)
            .map(BaseService.extractHeaders)
            .catch(BaseService.handleError);
    }

    logout() {
        localStorage.removeItem('currentData');
    }

    /* ToDo enhance this method */
    addOptionInHeader(key: string, value: any) {
        return new RequestOptions({ headers: new Headers({ key: value })});
    }

}
