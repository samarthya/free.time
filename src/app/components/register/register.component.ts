import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { faGoogle, faGit } from '@fortawesome/free-brands-svg-icons';

import { IUserProfile } from '@free-time/models/user.model';
import { Logger } from '@free-time/components/log.service';
import { GitService } from '@free-time/components/git.service';
import * as fromState from '@free-time/state/index';
import * as fromAuth from '@free-time/state/auth.state';
import * as fromConstants from '@free-time/components/constants/variables.constant';
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
  private currentState$: Observable<fromAuth.ActiveUserState>;
  
  public loggedIn: boolean;
  public config: string;
  public editMode: boolean;

  faGoogle = faGoogle;
  faGit = faGit;

  private userP: IUserProfile = fromConstants.BLANK_USER_PROFILE;

  private passwordConfirm: string;

  get user(): IUserProfile {
    return this.userP;
  }

  set user(user: IUserProfile) {
    this.userP = user;
  }

  /**
   * 
   * @param logger Logger information.
   * @param gitService 
   * @param store 
   */
  constructor(private logger: Logger,
    private gitService: GitService,
    private store: Store<fromState.State>) {
    this.editMode = false;

    this.currentState$ = this.store.pipe(select(fromState.selectActiveUserState));
  }

  ngOnInit() {
    this.logger.log(' Register ngOnInit called');
    this.currentState$.subscribe(state => {
      this.userP = state.userProfile;
      this.loggedIn = state.loggedIn;
    });
  }

  isPasswordValid(): boolean {
    const p1: string = this.userP.user.password;
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

  public callGitZen() {
    this.gitService.getZen().subscribe(response => {
      this.config = response;
    });
  }
}
