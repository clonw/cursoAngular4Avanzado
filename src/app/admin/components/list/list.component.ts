import { Component, DoCheck } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';
import { AnimalService} from '../../../services/animal.service';
import { UserService} from '../../../services/user.service';
import { UploadService} from '../../../services/upload.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [AnimalService]
})
export class ListComponent implements OnInit{
  public title: string;
  public numbers = new Array(10);
  public animals: Animal[];

  constructor(

    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService
  ){
    this.title = 'Listado de animales';
  }

  ngOnInit(){
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
