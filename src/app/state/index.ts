import { createSelector, createFeatureSelector, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromAuthState from './auth.state';



/**
 * The global state for the application.
 */
export interface State {
  userState: fromAuthState.ActiveUserState;
}

/**
 * Returns the Empty state (Utility function.)
 * @see {State}
 */
export function getEmptyState(): State {
  return {
    userState: fromAuthState.initialAppState
  };
}

/**
 * Initial states.
 */
export const initialState: State = {
  userState: fromAuthState.initialAppState,
};


/**
 * Meta-reducers allow developers to pre-process actions before normal reducers are invoked.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const reducers: ActionReducerMap<State> = {
    userState: fromAuthState.reducer,
};

/**
 * Selectors
 */
export const selectActiveUserState = createFeatureSelector<fromAuthState.ActiveUserState>(fromAuthState.activeAuthStateKey);
export const getUserProfile = createSelector(
    selectActiveUserState,
    fromAuthState.getUserProfile
);

export const getLoggedIn = createSelector(
  selectActiveUserState,
  fromAuthState.getLoggedIn
)