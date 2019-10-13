import { Injectable } from '@angular/core';
import { IUserProfile } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const login: IUserProfile = {
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
    const logout:  boolean = true;
    return { login };
  }
}
