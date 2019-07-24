import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { PersonComponent } from './shared/person/person.component';


/**
 * The root module to be bootstrapped by angular for more information
 * look at https://angular.io/guide/bootstrapping
 * NgModules are the compilation context for all the components
 * declared, defined for consumption.
 */
@NgModule({
  /**
   * Components declared in this module.
   * Components should be declared in only one NgModule class.
   */
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    PersonComponent,
  ],
  /**
   * For browser specific functionality you need this module.
   */
  imports: [
    BrowserModule
  ],
  providers: [],
  /**
   * Root component that is inserted in the index.html.
   * Each component bootstrapped is root of its complete application components.
   */
  bootstrap: [AppComponent]
})
export class AppModule { }
