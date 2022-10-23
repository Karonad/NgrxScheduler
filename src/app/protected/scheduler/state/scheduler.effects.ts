import { Lesson } from './../models/lesson.model';
import { SchedulerActionsGroup } from './scheduler.actions';
import { SchedulerService } from './../services/scheduler.service';
import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, of, tap } from 'rxjs';
import * as SchedulerActions from './scheduler.actions';


@Injectable()
export class SchedulerEffects {

  loadLessons$ = createEffect(() => 
    this.actions$.pipe(
      tap(() => console.log('toto')),
      ofType(SchedulerActions.SchedulerActionsGroup.loadAllLessons),
      mergeMap(() => this.schedulerService.getLessons().pipe(
        map((schedulers: any) => SchedulerActions.SchedulerActionsGroup.loadLessonsSuccess({ schedulers })),
        catchError(error => of(SchedulerActions.SchedulerActionsGroup.loadLessonsFailure({ error: error.body.error })))
      ))
    )
  );

  constructor(private actions$: Actions, private schedulerService: SchedulerService) { }

}
