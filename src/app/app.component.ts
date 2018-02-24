import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService} from './services/user.service';
// import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck{
  public title: string;
  public identity;

  constructor(
    private _userService: UserService
  ){
    this.title = 'NGZOO';
  }

  ngOnInit(){
    this.identity = this._userService.getIdentity();
  }
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }
}
