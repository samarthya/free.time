import { IUserProfile } from '../models/user.model';
import { createReducer, on, Action } from '@ngrx/store';

import * as fromConstants from '../components/constants/variables.constant';
import * as LoginActions from '@free-time/components/actions/login.action';

/**
 * Active user state information.
 */
export const activeAuthStateKey = 'userState';

/**
 * Representation of application state: Predictable state.
 */
export interface ActiveUserState {
  /**
   * A variable to denote whether the user has logged in.
   */
  loggedIn: boolean;
  /**
   * The user information.
   */
  userProfile?: IUserProfile;
}

export const initialAppState: ActiveUserState  = {
  userProfile: fromConstants.BLANK_USER_PROFILE,
  loggedIn: false
};


/**
 * The login reducer.
 * Each reducer function takes the latest Action dispatched, the current state,
 * and determines whether to return a newly modified state or the original state.
 */
const loginReducer =
  createReducer(
    initialAppState,
    on(LoginActions.login, (state, {principal}) => {
      return {
        /** Returns the new state for the Active User State. */
        loggedIn: false,
        userProfile: {
          user: principal,
          details: null,
          profile: null
        }
      }
    }),
    on(
      LoginActions.loginSuccess, (state, { userProfile }) => {
        return {
            ...state,
            loggedIn: true,
            userProfile
        };
      }),
      on(LoginActions.logout, (state) => {
        return {
          ...state,
          loggedIn: false,
          userProfile: undefined
        }
      })
  );


export function reducer(activeState: ActiveUserState | undefined, action: Action) {
  return loginReducer(activeState, action);
}

export const getUserProfile = (state: ActiveUserState) => state.userProfile;
export const getLoggedIn = (state:ActiveUserState) => state.loggedIn;