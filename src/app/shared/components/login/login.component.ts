import { Component, OnInit } from '@angular/core';
import { Logger } from '../log.service';
import { FormControl, FormGroup, AbstractControl, Validators} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

/**
 * Login component
 * Add some more description.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public username: FormControl = new FormControl('',[Validators.required, Validators.maxLength(30)]);
  public password: FormControl = new FormControl('',[Validators.required]);

  constructor(private logger: Logger, private route: ActivatedRoute, private router: Router) { 
    this.loginForm = new FormGroup({});
    this.loginForm.addControl('username',this.username);
    this.loginForm.addControl('password',this.password);
  }

  ngOnInit() {
    this.logger.log(' ngOnInit called for LoginComponent.');
  }

  public onSignin():void {
    const values = this.loginForm.value;
    this.logger.log(' Sign-in called from logincomponent');
    this.logger.log(' Values: '+ JSON.stringify(values));
    this.router.navigate(['/signedin'], {
      queryParams: { message: 'Sign in Attempt.'}
    });
  }

  public isUsernameValid(): boolean {
    const username: AbstractControl = this.loginForm.get('username');
    if(username.touched) {
      return username.invalid;
    } else {
      return false;
    }
  }

  public isPasswordValid(): boolean {
    const password: AbstractControl = this.loginForm.get('password');
    if(password.touched) {
      return password.invalid;
    } else {
      return false;
    }
  }  

}
