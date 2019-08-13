import { Component, OnInit } from '@angular/core';
import { IUserProfile } from '@free-time/models/user.model';
import { Logger } from '@free-time/components/index';

/**
 * It allows user to be registered for the portal. The basic information expected is
 * <code>
 * {
 *  firstName: "Name",
 *  lastName: "LastName",
 * }
 * </code>
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private userP: IUserProfile = {
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

  private passwordConfirm: string;

  get user(): IUserProfile {
    return this.userP;
  }

  set user(user: IUserProfile) {
    this.userP = user;
  }

  constructor(private logger: Logger) {
  }

  ngOnInit() {
    this.logger.log(' Register ngOnInit called');
  }

  isPasswordValid(): boolean {
    const p1: string =  this.userP.user.password;
    const p2: string = this.confirmPassword;
    if (p1 != null && p2 != null) {
      if (p1.length !== 0 && p2.length !== 0) {
        if (p1.search(p2) === 0 && p1.length === p2.length) {
          return true;
        }
      }
    }
    return false;
  }

  public get confirmPassword(): string {
    return this.passwordConfirm;
  }
  public set confirmPassword(value: string) {
    this.passwordConfirm = value;
  }
}
