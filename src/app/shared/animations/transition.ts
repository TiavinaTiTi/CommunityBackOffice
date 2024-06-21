import {animate, animation, group, keyframes, style} from "@angular/animations";

export let transitionFun = animation([
  style({opacity: 0, transform: 'translateX({{ start }})'}),
  animate('{{ timings }}', style({
    transform: 'translateX({{ end }})',
    // opacity: 1
  })),
], {
  params: {
    start: '-100%',
    timings: '.5s ease-in',
    end: '0'
  }
})
