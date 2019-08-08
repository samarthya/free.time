import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Logger } from './shared';
import * as LoginActions from './actions/login.action';
import { LoginService } from './login.service';
import { IPrincipal } from './models/user.model';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';


/**
 * Key concepts
 * - Effects isolate side effects from components, allowing for more pure components that select state and dispatch actions.
 * - Effects are long-running services that listen to an observable of every action dispatched from the Store.
 * - Effects filter those actions based on the type of action they are interested in. This is done by using an operator.
 * - Effects perform tasks, which are synchronous or asynchronous and return a new action.
 * <p>Effects when used along with Store, decrease the responsibility of the component.</p>
 */
@Injectable()
export class AppEffects {



  login$: Observable<any> = createEffect( () => this.actions$.
    pipe(
      ofType<LoginActions.LOGIN>(LoginActions.LOGIN),
      map( (action: LoginActions.LOGIN) => action.payload),
      mergeMap((payload: IPrincipal) =>
          this.loginService.doLogin(payload).
            pipe(
                  map( (currentUser: IUserProfile) => currentUser),
                  catchError(() => EMPTY)
                )
            )
        )
    );

  constructor(
    private actions$: Actions,
    private logger: Logger,
    private loginService: LoginService) {
      this.logger.log(' AppEffects called.');
  }
}
