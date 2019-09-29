import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from '@free-time/app.component';
import { Logger } from '@free-time/components/index';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { State } from '@free-time/state';


describe('Component AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  let store: MockStore<{ userState: {
    loggedIn: false,
    userProfile: undefined
  } }>;

  let debugElement: DebugElement;

  const initialState = { userState: {
    loggedIn: false,
    userProfile: undefined
  } };

  beforeEach(async(() => {
    /**
     * TestBed - allows running component and template together.
     * configrueTestingModule: Allows configuring a module specifically for testing.
     */
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      providers: [
        Logger, 
        provideMockStore({ initialState })
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.componentInstance;

    store = TestBed.get<Store<State>>(Store);

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have the ft-navbar', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    expect(htmlElement.firstElementChild.tagName).toContain('ft-navbar'.toLocaleUpperCase());
  });

  it(' Should have Minimum 2 element in the dom hierarchy', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    expect(htmlElement).toBeDefined();
    expect(htmlElement.childElementCount).toBe(2);
  });
});
