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
}
