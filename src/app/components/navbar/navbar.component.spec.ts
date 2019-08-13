import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { NavbarComponent } from './navbar.component';
import { Logger } from '../log.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppState } from 'src/app/state/app.state';
import { Store, StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS, reducer } from 'src/app/reducers';

describe('Component NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let store: MockStore<{
    loggedIn: false,
  }>;

  const initialState: AppState = {
    loggedIn: false,
    userInfo: {
      email: 'saurabh777@gmail.com',
      password: '1234567'
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [Logger],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({
          state: reducer
        })
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});