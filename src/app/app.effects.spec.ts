import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AppEffects } from './app.effects';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Logger } from './components';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        Logger,
        AppEffects,
        provideMockActions(() => actions$)
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });

    effects = TestBed.get<AppEffects>(AppEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
