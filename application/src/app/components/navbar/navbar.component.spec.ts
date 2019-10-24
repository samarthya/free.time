import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { Logger, NavbarComponent } from '@free-time/components/index';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Store } from '@ngrx/store';

import { State } from '@free-time/state';
import * as fromState from '@free-time/state/index';
import { dummyState } from '../constants/variables.constant';

describe('Component NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let store: MockStore<State>;

  const initialState: State = fromState.initialState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        Logger,
        provideMockStore({ initialState })
      ],
      imports: [
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get<Store<State>>(Store);
    store.setState(dummyState);

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<State>>(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
