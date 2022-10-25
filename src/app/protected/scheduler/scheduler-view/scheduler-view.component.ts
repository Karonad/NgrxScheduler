import { Component, OnInit, LOCALE_ID, Inject, Input } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Lesson } from '../models/lesson.model';

@Component({
  selector: 'app-scheduler-view',
  templateUrl: './scheduler-view.component.html',
  styleUrls: ['./scheduler-view.component.scss']
})
export class SchedulerViewComponent implements OnInit {

  @Input() events: CalendarEvent[] = [];

  viewDate: Date = new Date();

  constructor(@Inject(LOCALE_ID) public locale: string) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.events);
  }

}
