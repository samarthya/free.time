import {
  ActionReducer,
  MetaReducer,
  createReducer,
  on,
  ActionReducerMap
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppState, initialAppState, getEmptyUser, State } from '../state/app.state';
import * as LoginActions from '../actions/login.action';



export const loginReducer: ActionReducer<AppState> = createReducer(
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

export const ROOT_REDUCERS: ActionReducerMap<State> = {
  state: loginReducer,
};


/**
 * Meta-reducers allow developers to pre-process actions before normal reducers are invoked.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
