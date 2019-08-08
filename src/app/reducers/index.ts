import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IPrincipal } from '../models/user.model';

/**
 * Store state is READONLY and it is modified
 * only via reducers and actions.
 * Messages from Application to store are actions.
 */
export interface State {
  currentUser: AuthState
}

export interface AuthState {
  userInfo: IPrincipal;
  loggedIn: boolean;
}

export const initialState: State = {
  currentUser: {
    userInfo: {
      email: '',
      password: ''
    },
    loggedIn: false
  }
};

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
