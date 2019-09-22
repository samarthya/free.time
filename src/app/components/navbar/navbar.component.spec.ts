import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { Logger, NavbarComponent } from '@free-time/components/index';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Store, StoreModule } from '@ngrx/store';
import { ActiveUserState } from '@free-time/state/auth.state';
import { State } from '@free-time/state';

describe('Component NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
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
      declarations: [NavbarComponent],
      providers: [
        Logger,
        provideMockStore({initialState})
      ],
      imports: [
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<State>>(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
