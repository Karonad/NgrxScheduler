import { HttpErrorResponse } from '@angular/common/http';

import { createAction, props, createActionGroup, emptyProps } from '@ngrx/store';


export const RootActions = createActionGroup({
  source: 'ROOT',
  events: {
    'Init app': emptyProps(),
  }
});

