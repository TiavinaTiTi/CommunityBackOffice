import {animate, animation, group, keyframes, query, style, useAnimation} from "@angular/animations";
import {fadeAnimations} from "./fadeAnimations";

export let transitionAnimations = animation([
  style({opacity: 0, transform: 'translateX({{ start }})'}),
  group([
    animate('{{ timings }}', style({
      transform: 'translateX({{ end }})',
      // opacity: 1
    })),
    animate(
      "2000ms",
      keyframes([
        style({opacity: '{{ opacityStart }}', offset: 0.3}),
        style({opacity: .6, offset: 0.6}),
        style({opacity: '{{ opacityEnd }}', offset: 1})
      ])
    )
  ])
], {
  params: {
    start: '-100%',
    timings: '.5s ease-in',
    end: '0',
    opacityStart: .2,
    // offsetStart: 0.3,
    opacityEnd: .8,
    // offsetEnd: 1
  }
})
