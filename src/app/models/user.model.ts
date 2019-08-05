/**
 * Model class that specifies the New user profile information.
 */
export interface IUserProfile {
  /**
   * First name for the user.
   */
  name: string;
  /**
   * Last name for the user.
   */
  lastName: string;
  /**
   * Email, Registered user name for the user.
   */
  email: string;
  /**
   * Password
   */
  password: string;
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
   * Image URL.
   */
  imageUrl: string;
  /**
   * Some about me description.
   */
  description: string;

}
