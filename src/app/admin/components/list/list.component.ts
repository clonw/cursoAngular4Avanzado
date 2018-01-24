import { Component, DoCheck } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
})
export class ListComponent{
  title = 'Listado';
  numbers = new Array(10);
}
