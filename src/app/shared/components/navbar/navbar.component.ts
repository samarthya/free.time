import { Component, OnInit } from '@angular/core';
import { Logger } from '../log.service';
import { FormControl } from '@angular/forms';
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
  private loggedInUser: AppState;
  userInfo: IPrincipal;

  constructor(private logger: Logger, private store: Store<State>) {
    this.loggedInUser = null;
  }

  ngOnInit() {
    this.logger.log(' ngOnInit for NavBarComponent called.');
    this.currentUser$.subscribe((userInfo: AppState) => {
      this.logger.log('Welcome ' + userInfo.userInfo.email);
      this.loggedInUser = userInfo;
    });

  }

  public userLoggedIn(): boolean {
    return (this.loggedInUser != null) && (this.loggedInUser.userInfo.email.length > 0);
  }

}
