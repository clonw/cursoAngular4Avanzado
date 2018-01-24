import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector:'parques',
    templateUrl:'./parques.component.html'

})

export class ParquesComponent implements OnChanges, OnInit, DoCheck, OnDestroy{
    @Input() nombre: string;
    @Input('metros_cuadrados') metros: number;
    public vegetacion: string;
    public abierto: boolean;

    @Output() pasameLosDatos = new EventEmitter();

    constructor(){
        this.nombre = 'Parque natural para caballos';
        this.metros = 450;
        this.abierto = true;
        this.vegetacion = 'Alta';
    }

    ngOnChanges(changes: SimpleChanges){
        //console.log(changes);
        console.log( "Existen cambios en el componente");
    }

    ngOnInit(){
        console.log("métoso onInit lanzado")
    }

    ngDoCheck(){
        //console.log("DoingDoCheck");
    }

    ngOnDestroy(){

        console.log("a tomar por culo tete");
    }

    emitirEvento(){
        this.pasameLosDatos.emit({
            'nombre':this.nombre ,
            'metros':this.metros ,
            'abierto':this.abierto ,
            'vegetacion': this.vegetacion 
        });

    }
}