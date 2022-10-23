import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import {
  ActionReducer,
  MetaReducer,
  createReducer,
  Action,
  on,
} from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { RootActions } from './root.action';

export const ROOT_FEATURE_KEY = 'root';

export interface State {
  readonly [ROOT_FEATURE_KEY]: RootState;
}

export interface RootState {
  appName: string;
  error?: HttpErrorResponse | Error | string | null;
}

const initialState: RootState = {
  appName: 'NgRx',
  error: null,
};

function log(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const currentState = reducer(state, action);

    console.groupCollapsed(action.type);
    console.log('Etat precedent: ', state);
    console.log('Action: ', action);
    console.log('Etat suivant: ', currentState);
    console.groupEnd();

    return currentState;
  };
}

export const metaReducers: MetaReducer[] = [log];

export const rootReducer = createReducer<RootState, Action>(
  initialState,
  on(RootActions.initApp, (state: RootState) => {
    return {
      ...state,
    };
  })
);
