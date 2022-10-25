import { getSchedulers } from './../state/scheduler.selectors';
import { map, Observable, Subscriber, tap } from 'rxjs';
import { SchedulerService } from './../services/scheduler.service';
import { SchedulerActionsGroup } from './../state/scheduler.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Lessons } from '../models/lessons.model';
import { Lesson } from '../models/lesson.model';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
})
export class SchedulerComponent implements OnInit {
  lessons$!: Observable<CalendarEvent[]>;

  constructor(
    readonly store: Store,
    readonly schedulerService: SchedulerService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(SchedulerActionsGroup.loadAllLessons());
    this.lessons$ = this.store.select(getSchedulers).pipe(
      map((lessons) => {
        return lessons.map((lesson: Lesson) => {
          console.log('lesson', lesson);
          return {
            start: new Date(lesson.start),
            end: new Date(lesson.end),
            title: lesson.title,
            color: lesson.color,
          };
        });
      })
    );
  }
}
