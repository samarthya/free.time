import {
  ActionReducer,
  MetaReducer,
  createReducer,
  on,
  ActionReducerMap,
  Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppState, initialAppState, getEmptyUser, State } from '../state/app.state';
import * as LoginActions from '../actions/login.action';


const loginReducer =
createReducer(
  initialAppState,
  on(LoginActions.login, (state, { principal }) => {
    return {
      ...state,
      userInfo: principal,
      loggedIn: false
    };
  }),
  on(
    LoginActions.loginSuccess, (state, { userProfile }) => {
      return {
        ...state,
        userInfo: userProfile.user,
        loggedIn: true
      };
    }),
  on(LoginActions.logout, (state) => ({
    ...state,
    userInfo: getEmptyUser(),
    loggedIn: false
  }))
);

export function reducer(state: AppState | undefined, action: Action) {
  return loginReducer(state, action);
}

export const ROOT_REDUCERS: ActionReducerMap<State> = {
  state: reducer,
};


/**
 * Meta-reducers allow developers to pre-process actions before normal reducers are invoked.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
