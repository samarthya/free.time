import { createAction, props } from '@ngrx/store';
import { IPrincipal, IUserProfile } from '@free-time/models/user.model';



/**
 * Actions are POJO's with type and optional Payload.
 * Unique events that happen throughout the application.
 * From NgRx documentation.
 * 
 * <p>
 * There are a few rules to writing good actions within your application.
 *
 * <ul>
 *  <li>Upfront - write actions before developing features to understand and gain a shared knowledge of the feature being implemented.</li>
 *  <li>Divide - categorize actions based on the event source.</li>
 *  <li>Many - actions are inexpensive to write, so the more actions you write, the better you express flows in your application.</li>
 *  <li>Event-Driven - capture events not commands as you are separating the description of an event and the handling of that event.</li>
 *  <li>Descriptive - provide context that are targeted to a unique event with more detailed information you can use to aid in debugging with the developer tools.</li>
 * </ul>
 */

 /**
  * @link Action
  * Action-Login
  * The createAction function returns a function, that when called returns
  * an object in the shape of the Action interface.
  * 
  * The props method is used to define any additional metadata needed for
  * the handling of the action.
  */
export const login = createAction('[Login Initiatied] Login',
  props<{ principal: IPrincipal }>()
);

/**
 * Action-Login-Success
 */
export const loginSuccess = createAction('[Login Success] Login',
  props<{ userProfile: IUserProfile }>()
);

/**
 * Action-Login-Failure
 */
export const loginFailure = createAction('[Login Failure] Login',
  props<{ message: any }>()
);

/**
 * Action-Logout
 */
export const logout = createAction('[Logout initiated] logout', 
props<{ userName: string}>()
);

/**
 * Action-Edit-Profile
 */
export const profile = createAction('[Profile] Editing',
  props<{userProfile: IUserProfile}>()
);

/**
 * Action-Edit-Success
 */
export const profileSuccess = createAction('[Profile] Editing Success',
  props<{userProfile: IUserProfile}>()
);

/**
 * Action-Edit-Failure
 */
export const profileFailure = createAction('[Profile] Editing Failed',
  props<{ message: any }>()
);

