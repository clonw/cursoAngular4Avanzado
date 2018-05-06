// Importamos el inyectable ya que esto es un servicio y una clase que luego querremos inyectar en otro sitio
import { Injectable } from '@angular/core';
// CanActivate es la propiedad que nos va a permitir controlar la seguridad de esta ruta
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AdminGuard implements CanActivate{
    constructor(
        private _router: Router,
        private _userService: UserService
    ){}

    canActivate(){
        let identity = this._userService.getIdentity();

        if (identity && identity.role == 'ROLE_ADMIN'){
            return true;
        } else {
            this._router.navigate(['/home']);
            return false;
        }
    }
}
