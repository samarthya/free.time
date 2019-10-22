import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '@free-time/app.effects';
import * as fromStore from '@free-time/state/auth.state';

/**
 * Defined a module for IAM activity.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromStore.activeAuthStateKey, fromStore.reducer),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ]
})

export class IamModule { }
