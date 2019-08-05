import { Component, OnInit } from '@angular/core';
import { IUserProfile } from 'src/app/models/user.model';

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

  get user(): IUserProfile {
    return this.userP;
  }

  set user(user: IUserProfile) {
    this.userP = user;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
