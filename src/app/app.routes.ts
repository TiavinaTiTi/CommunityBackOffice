import { Routes } from '@angular/router';
import {HomePageComponent} from "./views/home-page/home-page.component";
import {ContactPageComponent} from "./views/contact-page/contact-page.component";
import {LoginPageComponent} from "./views/login-page/login-page.component";
import {DocumentPageComponent} from "./views/document-page/document-page.component";
import {SignUpPageComponent} from "./views/sign-up-page/sign-up-page.component";
import {DashboardPageComponent} from "./views/dashboard-page/dashboard-page.component";
import {AdminDocumentPageComponent} from "./views/admin-document-page/admin-document-page.component";
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: "full" },
  { path: 'dashboard', component: DashboardPageComponent, data: { animation: 'home' } },
  { path: 'home', component: HomePageComponent, data: { animation: 'home' } },
  { path: 'admin-docs', component: AdminDocumentPageComponent, data: { animation: 'docs' } },
  {
    path: 'edit',
    // component: TeamPageComponent,
    loadComponent: ()=> import('./views/edit-page/edit-page.component').then(m => m.EditPageComponent),
    data: { animation: 'edit' }
  },
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
