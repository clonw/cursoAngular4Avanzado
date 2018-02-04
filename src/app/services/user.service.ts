import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
/** esto nos va a dar un método que nos permite recoger los valores que da una peticion ajax */
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';
import { GLOBAL} from './global';

/**Para poder inyectar el servicio dentro de componente y dentro de diferentes sitios */
@Injectable()
export class UserService{
    public url: string;
    constructor(private _http: Http){
        this.url = GLOBAL.url;
    }

    register( user_to_register){
        let params = JSON.stringify(user_to_register);
        let headers = new Headers({ 'Content-Type': 'application/json'});

        //Peticion AJAX
        return this._http.post(this.url + 'register', params, {headers: headers})
                        .map(res => res.json());
    }
}
