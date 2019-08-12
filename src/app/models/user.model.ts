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

export const dummyUser: IUserProfile = {
  user: {
    email: 'saurabh777@gmail.com',
    password: 'ABCDEF123456',
  },
  profile: {
    name: 'Saurabh',
    lastName: 'Sharma',
    imageUrl: '',
  },
  details: {
    subscribeToEmail: 1,
    gitProfile: 'https://www.github.com/samarthya',
    googleProfile: '',
    description: 'This lad is still learning.'
  }
};
