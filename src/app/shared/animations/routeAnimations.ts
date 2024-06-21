import {animate, animateChild, group, keyframes, query, style, transition, trigger} from "@angular/animations";

export const slideInAnimation =
  /*trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], {optional: true}),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true }),
        query('@*', animateChild(), { optional: true })
      ]),
    ]),
  ]);*/
  trigger('routeAnimations', [

    transition('* <=> *', [

      style({ position: 'absolute' }),

      /*query(':enter', [
        style({opacity: 0, position: 'absolute', top: 0, left: 0})
      ], { optional: true }),*/

      query('@*', animateChild(), { optional: true }),

      /*group([

        /!*query(':leave', [
          animate(
            ".1s ease-out",
            keyframes([
              style({opacity: .8, offset: 0.3}),
              style({opacity: .6, offset: 0.6}),
              style({opacity: .2, offset: 1})
            ])
          )
        ], { optional: true }),

        query(':enter', [
          animate(
            ".1s ease-in",
            keyframes([
              style({opacity: .2, offset: 0.3}),
              style({opacity: .6, offset: 0.6}),
              style({opacity: .8, offset: 1})
            ])
          ),
        ], { optional: true }),*!/
        query('@*', animateChild(), { optional: true })
      ]),*/
    ]),
  ]);
