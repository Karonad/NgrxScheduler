import { SchedulerRoutingModule } from './scheduler/scheduler-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { SchedulerEffects } from './scheduler/state/scheduler.effects';
import { EffectsModule } from '@ngrx/effects';
import * as fromScheduler from './scheduler/state/scheduler.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SchedulerRoutingModule,
    StoreModule.forFeature(fromScheduler.schedulersFeatureKey, fromScheduler.reducer),
    EffectsModule.forFeature([SchedulerEffects])
  ]
})
export class ProtectedModule { }
