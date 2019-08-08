import { Component, OnInit } from '@angular/core';
import { Logger } from '../log.service';
import { Store } from '@ngrx/store';
import { IPrincipal } from 'src/app/models/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as AppActions from 'src/app/actions/login.action';
import { AuthState } from 'src/app/reducers';
import { Observable } from 'rxjs';

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

  private currentUser$: Observable<AuthState>;
  username: FormControl;
  password: FormControl;
  formLogin: FormGroup;

  constructor(private logger: Logger, private store: Store<AuthState>) {
  this.username = new FormControl('', Validators.required);
  this.password = new FormControl('', Validators.required);

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
  doLogin(): void {
    this.logger.log(' Login invoked. ');

    const principal: IPrincipal = {
      email: this.username.value,
      password: this.password.value
    };

    this.store.dispatch(AppActions.LOGIN({payload: principal}));
  }
}
