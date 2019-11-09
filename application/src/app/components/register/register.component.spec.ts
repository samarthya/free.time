import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Logger, RegisterComponent } from '@free-time/components/index';

import { Store, MemoizedSelector } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ActiveUserState, initialAppState } from '@free-time/state/auth.state';
import { State } from '@free-time/state';

import { DUMMY_USER_PROFILE } from '../constants/variables.constant';


import * as fromState from '@free-time/state/index';
/**
 * Testing the register component.
 */
describe('Component RegisterComponent', () => {
  let component: RegisterComponent;

  let dummyState: State = {
    userState: {
      loggedIn: true,
      userProfile: DUMMY_USER_PROFILE
    }
  }
  
  let store: MockStore<State>;

  let fixture: ComponentFixture<RegisterComponent>;

  const initialState: fromState.State = fromState.initialState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      providers: [
        Logger,
        provideMockStore({ initialState })
      ],
      declarations: [RegisterComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get<Store<State>>(Store);
    store.setState(dummyState);

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(' Should create the object', () => {
    expect(component).toBeTruthy();
  });
});
