import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';




import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS, metaReducers } from './reducers';

import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { appRoutes } from './routes/main.routes';

import {
  AboutComponent, ContactComponent,
  Logger, HomeComponent,
  ErrorpageComponent, PersonComponent,
  NavbarComponent, ThankyouComponent,
  FooterComponent, LoginComponent,
  RegisterComponent } from '../app/components/index';



import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faTwitter, faGit, faBlogger, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faAnchor, faThumbsUp, faThumbsDown, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
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
    ContactComponent,
    ErrorpageComponent,
    PersonComponent,
    NavbarComponent,
    ThankyouComponent,
    FooterComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent
  ],
  providers: [
    Logger
  ],
  /**
   * For browser specific functionality you need this module.
   */
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 500 }
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects])
  ],

  /**
   * Root component that is inserted in the index.html.
   * Each component bootstrapped is root of its complete application components.
   */
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private logger: Logger) {
    this.logger.log(' AppModule initialised.');
    library.add(
      faTwitter, faLinkedin,
      faGit, faBlogger, faThumbsUp,
      faThumbsDown, faAnchor, faSignInAlt,
      faFacebook, faGoogle,
      faSignOutAlt);
  }
}

