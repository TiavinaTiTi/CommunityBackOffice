import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChildrenOutletContexts, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NavComponent} from "./shared/components/nav/nav.component";
import {HomePageComponent} from "./views/home-page/home-page.component";
import {animate, animation, keyframes, style} from "@angular/animations";
import {slideInAnimation} from "./shared/animations/routeAnimations";
import {AuthenticationService} from "./shared/services/authenticationService/authentication.service";

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
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    slideInAnimation
  ]
})


export class AppComponent {

  contexts = inject(ChildrenOutletContexts)
  router = inject(Router)
  authService: AuthenticationService = inject(AuthenticationService)

  menus = [
    {icon: 'bi-textarea-t', title: 'edit-page', root: '/edit'},
    {icon: 'bi-table', title: 'admin-member', root: '/dashboard'},
    {icon: 'bi-journal-text', title: 'admin-docs', root: '/admin-docs'},
    // {icon: 'bi-clipboard-check', title: 'training', root: '/training'},
    {icon: 'bi-layout-text-window-reverse', title: 'document', root: '/docs'},
    // {icon: 'bi-telephone', title: 'contact', root: '/contact'},
  ]

  menuLogin = {icon: 'bi-person-circle', title: 'login', root: '/login'}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  logOut() {
    this.authService.logout()
    this.router.navigateByUrl("/login")
  }

}
