import { Component, OnInit } from '@angular/core';
import { Logger } from '../log.service';
import { Store } from '@ngrx/store';
import { IPrincipal } from 'src/app/models/user.model';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import * as AppActions from '../actions/login.action';

import { Observable } from 'rxjs';
import { State } from 'src/app/state/app.state';
import { MAX_USER_LENGTH } from '../constants/variables.constant';
import {faFacebook, faGoogle, faGit} from '@fortawesome/free-brands-svg-icons';
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

  private currentUser$: Observable<State>;
  username: FormControl;
  password: FormControl;
  formLogin: FormGroup;

  /**
   * Using icons.
   */
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  faGit = faGit;

  constructor(private logger: Logger, private store: Store<State>) {
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

  ngOnInit() {
    this.logger.log(' ngOnInit called for LoginComponent.');
    this.currentUser$ = this.store.select(state => state);
  }

  /**
   * Fires the login event.
   */
  public doLogin(): void {
    this.logger.log(' doLogin() invoked. ');

    const principal: IPrincipal = {
      email: this.username.value,
      password: this.password.value
    };

    this.store.dispatch(AppActions.login({ principal }));
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

