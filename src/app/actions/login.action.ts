import { createAction, props, Action } from '@ngrx/store';
import { IPrincipal, IUserProfile } from '../models/user.model';

export enum ActionTypes {
  LOGIN_ACTION = '[Login Initiatied] Login',
  LOGIN_SUCCESS = '[Login Success] Login',
  LOGIN_FAILURE = '[Login Failure] Login',
  LOGOUT = '[Logout initiated] logout'
}

/**
 * LOGIN Action
 */
// export class LoginAction implements Action {
//   type: ActionTypes.LOGIN_ACTION;
//   constructor(public payload: IPrincipal) {

//   }
// }

export const LOGIN = createAction(
  ActionTypes.LOGIN_ACTION,
  props<{ payload: IPrincipal }>()
  );

export const LOGIN_SUCCESS = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ payload: IUserProfile }>()
);


export const LOGIN_FAILURE: Action = createAction(ActionTypes.LOGIN_FAILURE);
export const LOGOUT: Action = createAction(ActionTypes.LOGOUT);
