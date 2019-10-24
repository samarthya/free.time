import { IUserProfile } from '@free-time/models/user.model';
import { State } from '@free-time/state';

export const MESSAGE = 'message';
export const MAX_USER_LENGTH = 30;

export const DUMMY_USER_PROFILE: IUserProfile = {
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

export const BLANK_USER_PROFILE: IUserProfile = {
  user: {
    email: '',
    password: '',
  },
  profile: {
    name: '',
    lastName: '',
    imageUrl: '',
  },
  details: {
    subscribeToEmail: 0,
    gitProfile: '',
    googleProfile: '',
    description: ''
  }
};

export const dummyState: State = {
  userState: {
    loggedIn: true,
    userProfile: DUMMY_USER_PROFILE
  }
}

