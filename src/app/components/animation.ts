import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeIn =
    trigger( 'fadeIn', [
        // Estado * es cualquier estado
        //state('*', style({
          //  opacity: 1
        //})),
        // :enter, cuando el componente se cargue se lanza un evento enter
        transition(':enter', [
            style({
                opacity: 0
            }),
            animate('300ms linear',
            style({
                opacity: 1
            }))
        ])
    ]);
