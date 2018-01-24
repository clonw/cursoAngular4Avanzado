import { Component, OnInit } from '@angular/core';
import { Console } from '@angular/core/src/console';
import { trigger, state, style, transition, animate} from '@angular/core';
import { fadeIn} from '../animation';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css'],
    animations: [
        // El nombre de los estados se puede poner el que uno quiera
        // Para el trigger creamos los estados con un estilo css en formato json,
        // para las propiedades que tiene un guión usaremos camecase como en borderRadius
        // Para usar las animaciones debemos importar en el app.module (es decir en el módulo) BrowserAnimationsModule
        trigger('marcar', [
            state('inactive', style({
                border: '5px solid #ccc'
            })),
            state('active', style({
                border: '5px solid yellow',
                background: 'red',
                borderRadius: '50px',
                transform: 'scale(1.2)'
            })),
            transition('inactive => active', animate('300ms linear')),
            transition('active => inactive', animate('300ms linear'))
        ]), fadeIn
    ]
    })
export class TiendaComponent implements OnInit{
    public titulo;
    public nombreDelParque: string;
    public miParque;
    public status;

    constructor(){
        this.titulo = 'Esta es la tienda';
        this.status = 'inactive';
    }

    cambiarEstado(status){
        // tslint:disable-next-line:triple-equals
        if (status == 'inactive'){
            this.status = 'active';
        } else {
            this.status = 'inactive';
        }
    }

    ngOnInit(){
        $('#textojq').hide();
        $('#botonjq').click(function(){
           $('#textojq').slideToggle();
       });
       $('#caja').dotdotdot({});
    }

    mostrarNombre(){
        console.log( this.nombreDelParque);
    }

    verDatosParque(event){
        console.log(event);
        this.miParque = event;
    }

    textoRichEditor(content){
        console.log(content);
    }
}
