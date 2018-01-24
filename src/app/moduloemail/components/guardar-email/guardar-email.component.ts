import { Component, DoCheck } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'guardar-email',
  template: `
    <h4>{{title}}</h4>
    <input type="text" [(ngModel)]="emailContacto" />
    <button (click)="guardarEmail()">Guardar Email</button>
  `
})
export class GuardarEmailComponent{
  title = 'Guardar Email';
    emailContacto: string;

  guardarEmail(){
    localStorage.setItem('emailContacto', this.emailContacto);
  }
}
