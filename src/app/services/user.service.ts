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

    register(){
        return 'Texto desde el servicio';
    }
}
