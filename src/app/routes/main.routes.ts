import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { ThankyouComponent } from '../shared/thankyou/thankyou.component';
import { ThankyouResolver } from '../shared/thankyou/thankyou.resolver.service';

/**
 * Defines the routes for the main application.
 * For more information for routing please [see](https://angular.io/start/routing)
 * A routed Angular application has one singleton instance of the Router service.
 * The order of the routes in the configuration matters and this is by design.
 */
export const appRoutes: Routes = [
  { path: 'tyu', component: ThankyouComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

