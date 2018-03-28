import { Component, DoCheck } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { GLOBAL } from '../../services/global';
import { Animal } from '../../models/animal';
import { AnimalService} from '../../services/animal.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'animal-detail',
  templateUrl: './animal-detail.component.html',
  providers: [AnimalService]
})
export class AnimalDetailComponent implements OnInit{
  public url: string;
  public animal: Animal;

  constructor(

    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService
  ){
    this.url = GLOBAL.url;
  }

  ngOnInit(){
    console.log( 'Detalle animal');
    this.getAnimal();
  }

  getAnimal(){
    this._route.params.forEach((params: Params) => {
      const id = params['id'];

      this._animalService.getAnimal(id).subscribe(
        response => {

          if (!response.animal){
            console.log( 'no tenemos respuesta del animal ' + response);
            this._router.navigate(['/']);
          } else {
            console.log('Recibimos el animal ' + this.animal);
            this.animal = response.animal;
          }
        },
        error => {
          console.log(<any>error);
          this._router.navigate(['/']);
        }
      );
    });
  }
}
