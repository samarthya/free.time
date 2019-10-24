import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Logger, LoginComponent } from '@free-time/components/index';
import { NO_ERRORS_SCHEMA } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store, MemoizedSelector } from '@ngrx/store';
import { State } from '@free-time/state';


import * as fromState from '@free-time/state/index';
import { DUMMY_USER_PROFILE } from '../constants/variables.constant';



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement;
  
  let dummyState: State = {
    userState: {
      loggedIn: true,
      userProfile: DUMMY_USER_PROFILE
    }
  }

  let mockActivatedRoute: any;
  let mockRouteService: any;


  let store: MockStore<State>;

  const initialState: State = fromState.initialState;

  let spyOnUsernameValid: any;
  let spyOnPasswordValid: any;

  beforeEach(async(() => {
    mockActivatedRoute = {};

    mockRouteService = jasmine.createSpyObj(['navigate']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        Logger,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouteService },
        provideMockStore({ initialState })
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get<Store<State>>(Store);
    store.setState(dummyState);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    spyOnUsernameValid = spyOn(component, 'isUsernameValid').and.callThrough();
    spyOnPasswordValid = spyOn(component, 'isPasswordValid').and.callThrough();
    fixture.detectChanges();
  });

  it(' Should create the login-component', () => {
    expect(component).toBeTruthy();
  });

  it(' Should check if the Username, Password and the sign-in tabs are present.', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;

    store.setState({
      userState: {
        loggedIn: false,
        userProfile: {
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
        }
      }
    });
    expect(htmlElement).toBeDefined();
    expect(htmlElement.childElementCount).toBe(1);
  });

  it(' Should check the UserName and Password validations.', () => {
    expect(component.formLogin.get('username').valid).toBeFalsy();
    expect(component.formLogin.get('password').valid).toBeFalsy();

    component.formLogin.get('username').setValue('');
    expect(component.formLogin.get('username').hasError('required')).toBeTruthy();
  });

  it(' Should check length of username', () => {
    component.formLogin.get('username').setValue('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    expect(component.formLogin.get('username').hasError('maxlength')).toBeTruthy();
    expect(component.formLogin.valid).toBeFalsy();
  });

  it(' Should check when sign-in is clicked.', () => {
    spyOn(component, 'doLogin').and.callThrough();

    const signinButton = debugElement.query(By.css('[type=\'submit\''));
    const username = debugElement.query(By.css('[name=\'username\']'));
    const password = debugElement.query(By.css('[name=\'password\']'));
    const formContact = debugElement.query(By.css('form'));

    console.log(username.nativeElement.dispatchEvent(new Event('blur')));
    console.log(password.nativeElement.dispatchEvent(new Event('blur')));

    console.log(username.nativeElement.dispatchEvent(new Event('click')));
    console.log(password.nativeElement.dispatchEvent(new Event('click')));

    component.formLogin.get('username').setValue('bhawnabhardwaj@123.com');
    component.formLogin.get('password').setValue('xyz@123');

    fixture.detectChanges();

    // signinButton.triggerEventHandler('ngSubmit', null);
    formContact.triggerEventHandler('ngSubmit', {});

    expect(component.formLogin.valid).toBeTruthy();
    expect(component.doLogin).toHaveBeenCalled();
  });

});
