import { Component, OnInit } from '@angular/core';
import { Logger } from '../log.service';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { State, AppState } from 'src/app/state/app.state';
import { IPrincipal } from 'src/app/models/user.model';

/**
 * Navigation component that holds the navigation links,
 * brand icon and other information to guide the navigation.
 */
@Component({
  selector: 'ft-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private currentUser$: Observable<AppState> = this.store.select(state => state.state );
  private loggedInUser: IPrincipal;


  constructor(private logger: Logger, private store: Store<State>) {
    this.loggedInUser = null;
  }

  ngOnInit() {
    this.logger.log(' ngOnInit for NavBarComponent called.');
    this.currentUser$.subscribe((userInfo: AppState) => {

      if (userInfo.loggedIn) {
        this.loggedInUser = userInfo.userInfo;
        this.logger.log('Welcome ' + this.loggedInUser.email);
      }
    });

  }

  /**
   * Returns the logged in user.
   */
  public getUserEmail(): string {
    return this.loggedInUser.email;
  }

  /**
   * Property to check whether the user has logged in.
   */
  public userLoggedIn(): boolean {
    return (this.loggedInUser != null) && (this.loggedInUser.email.length > 0);
  }

}
