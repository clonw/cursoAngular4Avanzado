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
    public identity;
    public token;

    constructor(private _http: Http){
        this.url = GLOBAL.url;
    }

    test(){
      return this._http.get('https://angular4backend.herokuapp.com/probando').map(res => res.json());;
    }
  
    register( user_to_register){
        const params = JSON.stringify(user_to_register);
        const headers = new Headers({ 'Content-Type': 'application/json'});

        // Peticion AJAX
        return this._http.post(this.url + 'register', params, {headers: headers})
                        .map(res => res.json());
    }

    // gettoken = null esto quiere decir que gettoken por defecto irá a null
    // gettoken será un boolean que informaremos desde login.component para querer obtener el token una vez el user
    // esté logueado
    signup(user_to_login, gettoken = null){
        if (gettoken != null){
            user_to_login.gettoken = gettoken;
        }

        const params = JSON.stringify(user_to_login);
        const headers = new Headers({ 'Content-Type': 'application/json'});

        // Peticion AJAX
        // Con el map capturamos la respuesta del API
        return this._http.post(this.url + 'login', params, {headers: headers}).map(res => res.json());
    }

    getIdentity(){
        const identity = JSON.parse(localStorage.getItem('identity'));

        // tslint:disable-next-line:triple-equals
        if (identity != 'undefined'){
            this.identity = identity;
        } else {
            this.identity = null;
        }

        return this.identity;
    }

    getToken(){
        const token = localStorage.getItem('token');

        // tslint:disable-next-line:triple-equals
        if ( token != 'undefined'){
            this.token = token;
        } else {
            this.token = null;
        }
        return this.token;
    }

    updateUser(user_to_update){
        const params = JSON.stringify(user_to_update);
        const headers = new Headers({
            'Content-Type' : 'application/json',
            // 'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : this.getToken()
        });

        return this._http.put(this.url + 'update-user/' + user_to_update._id, params, {headers : headers})
                        .map(res => res.json());
    }
}
