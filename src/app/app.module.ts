import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from '@free-time/app.component';




import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from '@free-time/in-memory-data.service';
import { MysqlserviceService } from './services/mysqlservice.service';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '@free-time/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { appRoutes } from '@free-time/routes/main.routes';

import {
  AboutComponent, ContactComponent,
  Logger, HomeComponent,
  ErrorpageComponent, PersonComponent,
  NavbarComponent, ThankyouComponent,
  FooterComponent, 
  LoginComponent,
  RegisterComponent } from '@free-time/components/index';



import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { IamModule } from './iam/iam.module';
import {metaReducers, reducers} from '@free-time/state/index';

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
    RegisterComponent,
    AppComponent,
    NavbarComponent,
    AboutComponent,
    PersonComponent,
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
    Logger,
    MysqlserviceService
    /* Did not add a provider entry for login.service as the providedIn prop is set in @injectable. */
  ],
  /**
   * For browser specific functionality you need this module.
   */
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    /*
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 500 }
    ),*/
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    HttpClientModule,
    IamModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    //EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot()
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
    // library.add(
    //   faTwitter, faLinkedin,
    //   faGit, faBlogger, faThumbsUp,
    //   faThumbsDown, faAnchor, faSignInAlt,
    //   faFacebook, faGoogle,
    //   faSignOutAlt);
  }
}

