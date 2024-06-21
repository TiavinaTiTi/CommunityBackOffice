import {animate, animation, keyframes, style} from "@angular/animations";

export let fadeAnimations = animation([
  style({opacity: 0}),
  animate(
    ".5s ease-out",
    keyframes([
      style({opacity: .2, offset: 0.3}),
      style({opacity: .6, offset: 0.6}),
      style({opacity: .8, offset: 1})
    ])
  )
])
