import { IPrincipal } from '../models/user.model';

/**
 * Representation of application state.
 */
export interface AppState {
  /**
   * A varable to denote whether the user has logged in.
   */
  loggedIn: boolean;
  /**
   * User information.
   * @see IPrincipal
   */
  userInfo: IPrincipal;
}

/**
 * The global state for the application.
 */
export interface State {
  state: AppState;
}

/**
 * Utility function to return the EMPTY user for the AppState
 * @see {IPrincipal}
 */
export function getEmptyUser(): IPrincipal {
  return {
    email: '',
    password: ''
  };
}

/**
 * Returns the Empty state (Utility function.)
 * @see {State}
 */
export function getEmptyState(): State {
  return {
    state: {
      userInfo: getEmptyUser(),
      loggedIn: false
    }
  };
}
export function getEmptyAppState(): AppState {
  return {
      userInfo: getEmptyUser(),
      loggedIn: false
  };
}

export const initialAppState: AppState = getEmptyAppState();
export const initialState: State = getEmptyState();


/**
 * Seelctors
 */
