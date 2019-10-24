import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Logger, RegisterComponent } from '@free-time/components/index';


import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ActiveUserState } from '@free-time/state/auth.state';

describe('Component RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  let store: MockStore<{
    userState: {
      loggedIn: false,
      userProfile: undefined
    }
}>;

  const initialState: ActiveUserState = {
    loggedIn: false,
    userProfile: {
      user: {
        email: 'saurabh777@gmail.com',
        password: '1234567'
      },
      details: undefined,
      profile: undefined
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      providers: [
        Logger,
        provideMockStore({ initialState})
      ],
      declarations: [ RegisterComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(' Should create the object', () => {
    expect(component).toBeTruthy();
  });
});
