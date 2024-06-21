import { Routes } from '@angular/router';
import {HomePageComponent} from "./views/home-page/home-page.component";
import {ContactPageComponent} from "./views/contact-page/contact-page.component";
import {LoginPageComponent} from "./views/login-page/login-page.component";
import {DocumentPageComponent} from "./views/document-page/document-page.component";
import {SignUpPageComponent} from "./views/sign-up-page/sign-up-page.component";
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'home', component: HomePageComponent, data: { animation: 'home' } },
  {
    path: 'team',
    // component: TeamPageComponent,
    loadComponent: ()=> import('./views/team-page/team-page.component').then(m => m.TeamPageComponent),
    data: { animation: 'team' }
  },
  {
    path: 'docs',
    // component: DocumentPageComponent,
    loadComponent: ()=> import('./views/document-page/document-page.component').then(m => m.DocumentPageComponent),
    data: {animation: 'docs'}
  },
  {
    path: 'contact',
    // component: ContactPageComponent,
    loadComponent: ()=> import('./views/contact-page/contact-page.component').then(m => m.ContactPageComponent),
    data: { animation: 'contact' }
  },
  {
    path: 'login',
    // component: LoginPageComponent,
    loadComponent: ()=> import('./views/login-page/login-page.component').then(m => m.LoginPageComponent),
    data: { animation: 'login' }
  },
  {
    path: 'sign-up',
    // component: SignUpPageComponent,
    loadComponent: ()=> import('./views/sign-up-page/sign-up-page.component').then(m => m.SignUpPageComponent),
    data: { animation: 'sign-up' }
  }
];
