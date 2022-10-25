import { SchedulerEffects } from './protected/scheduler/state/scheduler.effects';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, rootReducer, ROOT_FEATURE_KEY } from './state/root.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';


registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      [ROOT_FEATURE_KEY]: rootReducer
    }, {
      metaReducers,
      runtimeChecks: {
        strictActionTypeUniqueness: true,
        strictActionImmutability: true,
        strictStateImmutability: true,
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR ' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
