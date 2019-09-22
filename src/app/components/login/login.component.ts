import { Component, OnInit } from '@angular/core';
import { Logger } from '../log.service';
import { Store, select } from '@ngrx/store';
import { IPrincipal, IUserProfile } from 'src/app/models/user.model';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import * as appActions from '../actions/login.action';

import { Observable, of } from 'rxjs';
import { MAX_USER_LENGTH } from '../constants/variables.constant';
import {faFacebook, faGoogle, faGit} from '@fortawesome/free-brands-svg-icons';
import { map } from 'rxjs/operators';

import * as fromStore from '@free-time/state/index';
import * as fromAuthState from '@free-time/state/auth.state';

/**
 * Login component
 * Add some more description.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private currentUser$: Observable<IUserProfile>;
  username: FormControl;
  password: FormControl;
  formLogin: FormGroup;

  /**
   * Using icons.
   */
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  faGit = faGit;


  /**
   * Constructor for the application.
   * @param logger 
   * @param store 
   */
  constructor(
    private logger: Logger, 
    private store: Store<fromStore.State>) {
      this.logger.log(' Login Component - Constructor');
      this.username = new FormControl('', [
                                  Validators.required,
                                  Validators.email,
                                  Validators.maxLength(MAX_USER_LENGTH)]);
      this.password = new FormControl('', [Validators.required]);

      this.formLogin = new FormGroup({
        username: this.username,
        password: this.password
      });
  }

  /**
   * The NgInit
   */
  ngOnInit() {
    this.logger.log(' ngOnInit called for LoginComponent.');
    this.currentUser$ = this.store.pipe(select(fromStore.getUserProfile));
    this.currentUser$.subscribe( iP => {
      console.log('This is the detail I got ' + JSON.stringify(iP));
    });
  }

  /**
   * Fires the login event.
   */
  public doLogin(): void {
    this.logger.log(' doLogin() invoked. ');

    const userPrincipal: IPrincipal = {
      email: this.username.value,
      password: this.password.value
    };

    /**
     * Dispatch the action.
     */
    this.store.dispatch(appActions.login({ principal: userPrincipal }));
  }

  public isFormValid(): boolean {
    return this.formLogin.valid;
  }

  public isUsernameValid(): boolean {
    const username: AbstractControl = this.formLogin.get('username');
    return username.valid;
  }

  public isPasswordValid(): boolean {
    const password: AbstractControl = this.formLogin.get('password');
    return password.valid;
  }
}

