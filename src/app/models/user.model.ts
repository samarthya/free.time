export interface IPrincipal {
  /**
   * Email, Registered user name for the user.
   */
  email: string;
  /**
   * Password
   */
  password: string;
}

export interface IUser {
  /**
   * First name for the user.
   */
  name: string;
  /**
   * Last name for the user.
   */
  lastName: string;
  /**
   * Image URL.
   */
  imageUrl: string;
}

export interface IDetails {
  /**
   * Subsciption to email.
   */
  subscribeToEmail: number;
  /**
   * GIT profile url.
   */
  gitProfile: string;
  /**
   * Google profile URL.
   */
  googleProfile: string;
  /**
   * Some about me description.
   */
  description: string;
}


/**
 * Model class that specifies the New user profile information.
 */
export interface IUserProfile {
  /**
   * User information
   */
  user: IPrincipal;

  /**
   * User information
   */
  profile: IUser;

  /**
   * User details
   */
  details: IDetails;
}
