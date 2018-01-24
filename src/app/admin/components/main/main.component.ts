import { Component, DoCheck } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'admin-main',
  templateUrl: './main.component.html'
})
export class MainComponent{
  title = 'Panel de administración';

}
