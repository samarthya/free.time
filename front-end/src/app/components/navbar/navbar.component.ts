import { Component, OnInit } from '@angular/core';
import { Logger } from '@free-time/components/log.service';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { IPrincipal, IUserProfile } from '@free-time/models/user.model';
import {faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs/operators';

import * as fromStore from '@free-time/state/index';
import * as fromAuth from '@free-time/state/auth.state';

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

  private currentUser$: Observable<IUserProfile>;
  private loggedInUser: IPrincipal;

  faSignin = faSignInAlt;
  faSignout = faSignOutAlt;

  constructor(private logger: Logger, private store: Store<fromStore.State>) {
    this.loggedInUser = null;
    this.currentUser$ = this.store.pipe(select(fromStore.getUserProfile));
    this.currentUser$.subscribe((user: IUserProfile) => {
      this.loggedInUser = user.user;
      this.logger.log('Welcome ' + this.loggedInUser.email);
    });
  }

  ngOnInit() {
    this.logger.log(' ngOnInit for NavBarComponent called.');
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
