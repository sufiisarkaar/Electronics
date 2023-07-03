import { trigger, transition, style, animate, state } from '@angular/animations';

export let fade = trigger('fade', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
  ]);

  export let fadeLogin = trigger('fadeLogin', [
    state('void',style({
        opacity:0,
    })),
    transition(':enter,:leave',[
        animate(1000)
    ])
    ]);