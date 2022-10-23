import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Lesson } from '../models/lesson.model';

export const SchedulerActionsGroup = createActionGroup({
  source: 'Schedulers',
  events: {
    'Load all lessons': emptyProps(),
    'Load lessons failure': props<{ error: any }>(),
    'Load lessons success': props<{ schedulers: any }>(),
  }
})

