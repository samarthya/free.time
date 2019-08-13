import { IPrincipal } from '@free-time/models/user.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

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
  // routerState: fromRouter.RouterReducerState<any>;
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
 * Selectors
 */

export const selectAppStateFromState = (state: State): AppState => state.state;
// export const selectUserInfomationFromState = (state: AppState): IPrincipal => state.userInfo;

export const selectUserInfomationFromState = createSelector(selectAppStateFromState, (appState) => appState.userInfo);

// export const selectRouter = createFeatureSelector<State, fromRouter.RouterReducerState<any>>('routerState');

// const {
//   selectQueryParams,    // select the current route query params
//   selectQueryParam,     // factory function to select a query param
//   selectRouteParams,    // select the current route params
//   selectRouteParam,     // factory function to select a route param
//   selectRouteData,      // select the current route data
//   selectUrl,            // select the current url
// } = fromRouter.getSelectors(selectRouter);

// export const selectRouteId = selectRouteParam('id');
// export const selectStatus = selectQueryParam('status');
