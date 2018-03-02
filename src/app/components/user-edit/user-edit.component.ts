import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../models/user';
import {GLOBAL} from '../../services/global';
import {UserService } from '../../services/user.service';

// decorador
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'user-edit',
    templateUrl: './user-edit.component.html',
    providers: [UserService]
})
export class UserEditComponent implements OnInit{

    public title: string;
    public user: User;
    public identity;
    public token;
    public status;

    constructor(
        private _userService: UserService
    ){
        this.title = 'Actualizar mis datos';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getIdentity();
        this.user = this.identity;
    }

    ngOnInit(): void {
       console.log('user-edit.component.ts cargado!!!');
    }

    onSubmit(){
        this._userService.updateUser( this.user).subscribe(
            response => {
                if (!response.user){
                    console.log('Primer error');
                    this.status = 'error';
                } else {
                    this.status = 'success';
                    localStorage.setItem('identity', JSON.stringify(this.user));

                    // Subida de la imagen
                }
            },
            error => {
                console.log('segundo error');
                var errorMessage = <any>error;
                if (errorMessage != null){
                    this.status = 'error';
                }
            }
        );
    }
}
