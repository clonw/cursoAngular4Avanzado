import { Component, DoCheck } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'main-email',
  template: `
  <div class="panel panel-default">
    <h2>{{title}}</h2>
    <hr/>
    <mostrar-email></mostrar-email>
    <guardar-email></guardar-email>
  </div>
  `
})
export class MainEmailComponent implements OnInit{
  title = 'Modulo email';

  ngOnInit(){
    console.log('Componente principal modulo cargado');
  }
}
