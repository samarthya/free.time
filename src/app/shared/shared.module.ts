import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  Logger,
  ThankyouComponent,
  PersonComponent,
  NavbarComponent,
  ErrorpageComponent,
  FooterComponent
} from './index';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faTwitter, faGit, faBlogger, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faAnchor, faThumbsUp, faThumbsDown, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { appRoutes } from '../routes/main.routes';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    Logger
  ],
  declarations: [
    ErrorpageComponent,
    PersonComponent,
    NavbarComponent,
    ThankyouComponent,
    FooterComponent,
    LoginComponent
  ],
  exports: [
    ErrorpageComponent,
    PersonComponent,
    NavbarComponent,
    ThankyouComponent,
    FooterComponent
  ]
})
export class SharedModule {
  constructor() {
    library.add(faTwitter, faLinkedin, faGit, faBlogger, faThumbsUp, faThumbsDown, faAnchor, faSignInAlt, faFacebook, faGoogle);
  }
}
