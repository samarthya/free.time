import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';


/**
 * <p>
 * The root module to be bootstrapped by angular for more information
 * look <a href="https://angular.io/guide/bootstrapping">here</a>
 * </p>
 * <p>
 * NgModules are the compilation context for all the components
 * declared, defined for consumption.
 * </p>
 */
@NgModule({
  /**
   * Components declared in this module.
   * Components should be declared in only one NgModule class.
   */
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  /**
   * For browser specific functionality you need this module.
   */
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes, { enableTracing: true })
    RouterModule,
    SharedModule
  ],

  /**
   * Root component that is inserted in the index.html.
   * Each component bootstrapped is root of its complete application components.
   */
  bootstrap: [AppComponent]
})
export class AppModule {
}
