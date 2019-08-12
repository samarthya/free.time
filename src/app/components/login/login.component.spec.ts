import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Logger } from '../log.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/reducers';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement;

  let mockActivatedRoute: any;
  let mockRouteService: any;
  let spyOnUsernameValid: any;
  let spyOnPasswordValid: any;

  beforeEach(async(() => {
    mockActivatedRoute = {
      snapshot: {
        queryParams: {
          message: 'An attempt to login.'
        }
      }
    };

    mockRouteService = jasmine.createSpyObj(['navigate']);

    TestBed.configureTestingModule({
     //imports: [ReactiveFormsModule],
      declarations: [ LoginComponent ],
      imports: [
        StoreModule.forRoot({
          state: reducer
        })
      ],
      providers: [
        Logger,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouteService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    spyOnUsernameValid = spyOn(component, 'isUsernameValid').and.callThrough();
    spyOnPasswordValid = spyOn(component, 'isPasswordValid').and.callThrough();
    
    fixture.detectChanges();
  });

  it('should create the login-component', () => {
    expect(component).toBeTruthy();
  });

  it('should check if the Username, Password and the sign-in tabs are present.', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    expect(htmlElement).toBeDefined();
    expect(htmlElement.childElementCount).toBe(1);
  });

  it('should check the UserName and Password validations.', () => {
    expect(component.formLogin.get('username').valid).toBeFalsy();
    expect(component.formLogin.get('password').valid).toBeFalsy();
    
    component.formLogin.get('username').setValue('');
    expect(component.formLogin.get('username').hasError('required')).toBeTruthy(); 
  });

  it(' should check length of username',() => {
    component.formLogin.get('username').setValue('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    expect(component.formLogin.get('username').hasError('maxlength')).toBeTruthy();
    expect(component.formLogin.valid).toBeFalsy();
  });

  it( ' Check when sign-in is clicked.', () => {
    spyOn(component, 'doLogin').and.callThrough();

    const signinButton = debugElement.query(By.css('[type=\'submit\''));
    const username = debugElement.query(By.css('[name=\'username\']'));
    const password = debugElement.query(By.css('[name=\'password\']'));
    const formContact = debugElement.query(By.css('form'));

    /*setTimeout(() => {
      console.log(username.nativeElement.dispatchEvent(new Event('blur')));
      console.log(password.nativeElement.dispatchEvent(new Event('blur')));
      
    }, 1000); */
    
    console.log(username.nativeElement.dispatchEvent(new Event('blur')));
    console.log(password.nativeElement.dispatchEvent(new Event('blur')));
    
    component.formLogin.get('username').setValue('bhawnabhardwaj');
    component.formLogin.get('password').setValue('xyz@123');

    fixture.detectChanges();

    signinButton.triggerEventHandler('ngSubmit', null);
    formContact.triggerEventHandler('submit', { });


    expect(component.formLogin.valid).toBeTruthy();
    
    expect(component.doLogin).toHaveBeenCalled();
  });

});
