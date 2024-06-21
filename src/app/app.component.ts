import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChildrenOutletContexts, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {interval, Observable} from "rxjs";
import {NavComponent} from "./shared/components/nav/nav.component";
import {HomePageComponent} from "./views/home-page/home-page.component";
import {animate, animation, keyframes, style, transition, trigger, useAnimation} from "@angular/animations";
import {slideInAnimation} from "./shared/animations/routeAnimations";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export let fadeAnimations = animation([
  style({opacity: 0}),
  animate(
    '{{ timings }}',
    keyframes([
      style({opacity: .2, offset: 0.3}),
      style({opacity: .6, offset: 0.6}),
      style({opacity: .8, offset: 1})
    ])
  )
], {
  params: {
    timings: '.6s ease-out',
  }
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavComponent,
    HomePageComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    slideInAnimation
  ]
})


export class AppComponent {

  contexts = inject(ChildrenOutletContexts)
  root = inject(Router)

  menus = [
    {icon: 'bi-house', title: 'home', root: '/home'},
    {icon: 'bi-people', title: 'team', root: '/team'},
    // {icon: 'bi-clipboard-check', title: 'training', root: '/training'},
    {icon: 'bi-layout-text-sidebar-reverse', title: 'document', root: '/docs'},
    {icon: 'bi-telephone', title: 'contact', root: '/contact'},
  ]

  menuLogin = {icon: 'bi-person-circle', title: 'login', root: '/login'}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
