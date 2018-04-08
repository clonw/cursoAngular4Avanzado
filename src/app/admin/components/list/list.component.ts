import { Component, DoCheck } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';
import { AnimalService} from '../../../services/animal.service';
import { UserService} from '../../../services/user.service';
import { UploadService} from '../../../services/upload.service';
import { User } from '../../../models/user';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [AnimalService, UserService]
})
export class ListComponent implements OnInit{
  public title: string;
  public numbers = new Array(10);
  public animals: Animal[];
  public token;
  public busqueda;

  constructor(

    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService,
    private _userService: UserService
  ){
    this.title = 'Listado de animales';
    this.token = _userService.getToken();
  }

  ngOnInit(){
    this.getAnimals();
  }

  deleteAnimal(id){
    $('#myModal-' + id).modal('hide');
    this._animalService.deleteAnimal(this.token, id).subscribe(
      response => {
        if (!response.animal){
          alert( 'error en el servidor');
        }
        this.getAnimals();
      },
      error => {
        alert( 'error en el servidor');
      }
    );
  }

  getAnimals(){
    this._animalService.getAnimals().subscribe(
      response => {
        if ( !response.animals){
          console.log('No han llegado animalicos');
        } else {
          this.animals = response.animals;
        }
      },
      error => {
        console.log( <any>error);
      }
    );
  }
}
