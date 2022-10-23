import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulerRoutingModule } from './scheduler-routing.module';
import { SchedulerComponent } from './scheduler/scheduler.component';

import * as fromScheduler from './state/scheduler.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SchedulerEffects } from './state/scheduler.effects';



@NgModule({
  declarations: [
    SchedulerComponent
  ],
  imports: [
    CommonModule,
    SchedulerRoutingModule,
  ]
})
export class SchedulerModule { }
