import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  Logger,
  ThankyouComponent,
  PersonComponent,
  NavbarComponent,
  ErrorpageComponent,
  FooterComponent,
  RegisterComponent,
  LoginComponent
} from './index';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faTwitter, faGit, faBlogger, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faAnchor, faThumbsUp, faThumbsDown, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { appRoutes } from '../routes/main.routes';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    LoginComponent,
    RegisterComponent
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
    library.add(
      faTwitter, faLinkedin,
      faGit, faBlogger, faThumbsUp,
      faThumbsDown, faAnchor, faSignInAlt,
      faFacebook, faGoogle,
      faSignOutAlt);
  }
}
