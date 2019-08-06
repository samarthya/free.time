import { Component, OnInit } from '@angular/core';
import { IUserProfile } from 'src/app/models/user.model';
import { Logger } from '../log.service';

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
    name: '',
    lastName: '',
    email: '',
    password: '',
    subscribeToEmail: 0,
    gitProfile: '',
    googleProfile: '',
    imageUrl: '',
    description: ''
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

  isPasswordValid(p1: string, p2: string): boolean {
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
