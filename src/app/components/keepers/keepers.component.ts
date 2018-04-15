import { Component, OnInit } from '@angular/core';
import { fadeIn} from '../animation';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  providers: [UserService],
  animations: [fadeIn]
})
export class KeepersComponent implements OnInit{
  title: string;
  public keepers: User[];
  public url: string;

  constructor(
    private _userService: UserService
  ){
    this.title = 'Cuidadores';
    this.url = GLOBAL.url;
  }

  ngOnInit(){
    console.log('keepers.component cargado');
    this.getKeepers();
  }

  getKeepers(){
    this._userService.getKeepers().subscribe(
      response => {
        if ( !response.users){
          console.log('No han llegado keepers');
        } else {
          this.keepers = response.users;
          console.log('Cuidadores recibidos');
          console.log(JSON.stringify(this.keepers));
        }
      },
      error => {
        console.log( <any>error);
      }
    );
  }
}
