import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { SchedulerEffects } from './scheduler/state/scheduler.effects';
import { EffectsModule } from '@ngrx/effects';
import * as fromScheduler from './scheduler/state/scheduler.reducer';
import { SchedulerModule } from './scheduler/scheduler.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SchedulerModule,
    StoreModule.forFeature(fromScheduler.schedulersFeatureKey, fromScheduler.reducer),
    EffectsModule.forFeature([SchedulerEffects])
  ]
})
export class ProtectedModule { }
