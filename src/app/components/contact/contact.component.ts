import { Component, OnInit } from '@angular/core';
import { fadeIn} from '../animation';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contact',
  templateUrl: './contact.component.html',
  animations: [fadeIn]
})
export class ContactComponent implements OnInit{
  title = 'Contacto';
  emailContacto: string;

  ngOnInit(){
    console.log('contact.component cargado');
  }
  guardarEmail(){
    localStorage.setItem('emailContacto', this.emailContacto);
  }
}
