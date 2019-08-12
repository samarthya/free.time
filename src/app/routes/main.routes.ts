import { Routes } from '@angular/router';
import {
  ThankyouComponent, HomeComponent,
  AboutComponent, ContactComponent,
  LoginComponent, RegisterComponent,
  ErrorpageComponent } from '../components/index';

/**
 * Defines the routes for the main application.
 * For more information for routing please [see](https://angular.io/start/routing)
 * A routed Angular application has one singleton instance of the Router service.
 * The order of the routes in the configuration matters and this is by design.
 */
export const appRoutes: Routes = [
  { path: 'tyu', component: ThankyouComponent, data: {
    message: 'Thank you for contacting us.'
  } },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorpageComponent}
];

