import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {
  animate,
  group, keyframes,
  style,
  transition,
  trigger,
  useAnimation
} from "@angular/animations";
import {transitionAnimations} from "../../shared/animations/transitionAnimations";
import {fadeAnimations} from "../../shared/animations/fadeAnimations";
import {NgOptimizedImage} from "@angular/common";
import {transitionFun} from "../../shared/animations/transition";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  animations: [

    trigger('translateRight', [
      transition(':enter', [
        /*style({opacity: 0, transform: 'translateX(100%)'}),
        group([
          animate('500ms', style({
            transform: 'translateX(0)',
            // opacity: 1
          })),
          animate(
            "500ms",
            keyframes([
              style({opacity: .2, offset: 0.3}),
              style({opacity: .6, offset: 0.6}),
              style({opacity: .8, offset: 1})
            ])
          )
        ])*/
        group([
          useAnimation(transitionFun, {
            params: {
              start: '100%',
              end: '0%'
            }
          }),
          animate(
            "500ms",
            keyframes([
              style({opacity: .2, offset: 0.3}),
              style({opacity: .6, offset: 0.6}),
              style({opacity: .8, offset: 1})
            ])
          )
        ])

      ]),
      transition(':leave', [
        style({transform: 'translateX(0)'}),
        group([
          animate('500ms', style({
            transform: 'translateX(100%)',
            // opacity: 1
          })),
          animate(
            "500ms",
            keyframes([
              style({opacity: 0, offset: .8}),
            ])
          )
        ])
      ])
    ]),

    trigger('translateLeft', [
      transition(':enter', [
        /*style({opacity: 0, transform: 'translateX(100%)'}),
        group([
          animate('500ms', style({
            transform: 'translateX(0)',
            // opacity: 1
          })),
          animate(
            "500ms",
            keyframes([
              style({opacity: .2, offset: 0.3}),
              style({opacity: .6, offset: 0.6}),
              style({opacity: .8, offset: 1})
            ])
          )
        ])*/
        group([
          useAnimation(transitionFun, {
            params: {
              start: '-100%',
              end: '0'
            }
          }),
          animate(
            "500ms",
            keyframes([
              style({opacity: .2, offset: 0.3}),
              style({opacity: .6, offset: 0.6}),
              style({opacity: .8, offset: 1})
            ])
          )
        ])

      ]),
      transition(':leave', [
        style({transform: 'translateX(0)'}),
        group([
          animate('500ms', style({
            transform: 'translateX(-100%)',
          })),
          animate(
            "500ms",
            keyframes([
              style({opacity: 0, offset: .8}),
            ])
          )
        ])
      ])
    ]),


  ]
})
export class HomePageComponent {

}
