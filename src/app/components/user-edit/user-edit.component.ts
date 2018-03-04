import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL} from '../../services/global';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';

// decorador
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'user-edit',
    templateUrl: './user-edit.component.html',
    providers: [UserService, UploadService]
})
export class UserEditComponent implements OnInit{

    public title: string;
    public user: User;
    public identity;
    public token;
    public status;
    public filesToUpload: Array<File>;
    public url: string;

    constructor(
        private _userService: UserService,
        private _uploadService: UploadService
    ){
        this.title = 'Actualizar mis datos';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.url = GLOBAL.url;
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
                    if (this.filesToUpload != null){
                        this._uploadService.makeFileRequest(this.url + 'upload-image-user/' + this.user._id,
                        [], this.filesToUpload, this.token, 'image')
                            .then((result: any) => {
                                this.user.image = result.image;
                                localStorage.setItem('identity', JSON.stringify(this.user));
                                console.log(this.user);
                            });
                        }
                }
            },
            error => {
                console.log('segundo error');
                const errorMessage = <any>error;
                if (errorMessage != null){
                    this.status = 'error';
                }
            }
        );
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }
}
