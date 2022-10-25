import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulerRoutingModule } from './scheduler-routing.module';
import { SchedulerComponent } from './scheduler/scheduler.component';

import { SchedulerFilterComponent } from './scheduler-filter/scheduler-filter.component';
import { SchedulerViewComponent } from './scheduler-view/scheduler-view.component';
import { SchedulerCardComponent } from './scheduler-card/scheduler-card.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';



@NgModule({
  declarations: [
    SchedulerComponent,
    SchedulerFilterComponent,
    SchedulerViewComponent,
    SchedulerCardComponent
  ],
  imports: [
    CommonModule,
    SchedulerRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ]
})
export class SchedulerModule { }
