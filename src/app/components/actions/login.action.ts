import { createAction, props } from '@ngrx/store';
import { IPrincipal, IUserProfile } from '@free-time/models/user.model';



/**
 * Actions are POJO's with type and optional Payload.
 */
export const login = createAction('[Login Initiatied] Login',
  props<{ principal: IPrincipal }>()
);

export const loginSuccess = createAction('[Login Success] Login',
  props<{ userProfile: IUserProfile }>()
);

export const loginFailure = createAction('[Login Failure] Login',
  props<{ message: any }>()
);

export const logout = createAction('[Logout initiated] logout');



