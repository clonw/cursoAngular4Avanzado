import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeLateral =
    trigger( 'fadeLateral', [
        // Estado * es cualquier estado
        // state('*', style({
          //  opacity: 1
        // })),
        // :enter, cuando el componente se cargue se lanza un evento enter
        transition(':enter', [
            style({
                opacity: 0,
                // mueve el 100% del componente a la parte izquierda
                transform: 'translateX(-30%)'
            }),
            animate('300ms ease-in',
            style({
                opacity: 1,
                transform: 'translateX(0)'
            }))
        ])
    ]);
