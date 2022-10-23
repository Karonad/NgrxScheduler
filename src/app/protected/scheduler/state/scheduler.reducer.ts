import { ErrorType } from '../models/error.model';
import { Lesson } from '../models/lesson.model';

import { createReducer, on } from '@ngrx/store';
import * as SchedulerActions from './scheduler.actions';

export const schedulersFeatureKey = 'schedulers';

export interface SchedulersState {
  lessons: Lesson[];
  error: ErrorType;
}

export interface State {
  readonly [schedulersFeatureKey]: SchedulersState;
}

export const initialState: SchedulersState = {
  lessons: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(SchedulerActions.SchedulerActionsGroup.loadLessonsSuccess, (state, { schedulers }) => {            
    return {
      ...state,
      lessons: schedulers.lessons,
    };
  }),
  on(
    SchedulerActions.SchedulerActionsGroup.loadLessonsFailure,
    (state, { error }) => {
      return {
        ...state,
        error: error,
      };
    }
  )
);
