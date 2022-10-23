import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SchedulersState, schedulersFeatureKey } from './scheduler.reducer';

const selectSchedulersFeature = createFeatureSelector<SchedulersState>(schedulersFeatureKey);

export const getSchedulers = createSelector(selectSchedulersFeature, (state: SchedulersState) => state.lessons);

export const getError = createSelector(selectSchedulersFeature, (state: SchedulersState) => state.error);
