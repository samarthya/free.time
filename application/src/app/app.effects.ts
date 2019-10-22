import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import * as AppActions from '@free-time/components/index';
import { LoginService } from '@free-time/login.service';
import { IPrincipal } from '@free-time/models/user.model';
import { map, catchError, tap, exhaustMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Action } from '@ngrx/store';


/**
 * Key concepts
 * - Effects when used along with Store, decrease the responsibility of the component
 * - Effects isolate side effects from components, allowing for more pure components that select state and dispatch actions.
 * - Effects are long-running services that listen to an observable of every action dispatched from the Store.
 * - Effects filter those actions based on the type of action they are interested in. This is done by using an operator.
 * - Effects perform tasks, which are synchronous or asynchronous and return a new action.
 * <p>Effects when used along with Store, decrease the responsibility of the component.</p>
 * Read <a href="https://martinfowler.com/eaaDev/EventSourcing.html">this</a>
 * <h2> Effects provide a way to interact with services and isolate them from the components.</h2>
 */
@Injectable()
export class AppEffects {


  login$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.login),
      map(action => action.principal),
      exhaustMap((principal: IPrincipal) =>
     // this.loginService.loginUser(principal.email, principal.password).pipe(
        this.loginService.loginUser(principal).pipe(
          map((userProfile) => AppActions.loginSuccess({userProfile})),
          catchError(message => of({ type: '[Login Failure] Login', payload: message }))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AppActions.loginSuccess),
        tap(() => this.routerService.navigate(['/home']))
      ),
    { dispatch: false }
  );
  
  /*logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.logout),
      map(action => action.userName),
      exhaustMap((userName: string) =>
        this.loginService.logoutUser(userName).pipe(
          map( (status) => {
            this.logger.log( ' Error: ' + status)
          })
        )
      )
    ),
    { dispatch: false }
  );

*/
  // init$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ROOT_EFFECTS_INIT),
  //     tap(() => {
  //       console.log(' INIT called. ');
  //     })
  //   )
  // );


  constructor(
    private actions$: Actions,
    private logger: AppActions.Logger,
    private loginService: LoginService,
    private routerService: Router) {
    this.logger.log(' AppEffects called.');
  }


}
