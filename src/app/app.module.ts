import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { PersonComponent } from './shared/person/person.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes/main.routes';
import { FooterComponent } from './footer/footer.component';
import { Logger } from './shared/log.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faTwitter, faGit, faBlogger } from '@fortawesome/free-brands-svg-icons';
import { faAnchor, faThumbsUp, faThumbsDown, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { ContactComponent } from './contact/contact.component';
import { ThankyouComponent } from './shared/thankyou/thankyou.component';
import { ErrorpageComponent } from './shared/errorpage/errorpage.component';
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
    HomeComponent,
    FooterComponent,
    ThankyouComponent,
    ContactComponent,
    ErrorpageComponent
  ],
  /**
   * For browser specific functionality you need this module.
   */
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    // RouterModule.forRoot(appRoutes, { enableTracing: true })
    RouterModule.forRoot(appRoutes)
  ],

  providers: [Logger],

  /**
   * Root component that is inserted in the index.html.
   * Each component bootstrapped is root of its complete application components.
   */
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faTwitter, faLinkedin, faGit, faBlogger, faThumbsUp, faThumbsDown, faAnchor, faSignInAlt);
  }
}
