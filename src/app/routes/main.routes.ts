import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { ThankyouComponent } from '../shared/components/thankyou/thankyou.component';

import { ErrorpageComponent } from '../shared/components/errorpage/errorpage.component';
import { LoginComponent } from '../shared/components/login/login.component';

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
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorpageComponent}
];

