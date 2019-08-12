import { IPrincipal } from '../models/user.model';

export interface AppState {
  loggedIn: boolean;
  userInfo: IPrincipal;
}

export interface State {
  state: AppState;
}


export function getEmptyUser(): IPrincipal {
  return {
    email: '',
    password: ''
  };
}

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
