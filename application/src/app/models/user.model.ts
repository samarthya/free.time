/**
 * This file is meant to define the basic user structure that will be consumed in the application.
 */

/**
 * Represents the basic user principal.
 */
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

/**
 * Represents the user entity.
 */
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

/**
 * Represents the User details.
 */
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
