import { getSchedulers } from './../state/scheduler.selectors';
import { Lesson } from './../models/lesson.model';
import { Observable } from 'rxjs';
import { SchedulerService } from './../services/scheduler.service';
import { SchedulerActionsGroup } from './../state/scheduler.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {

  lessons$!: Observable<Lesson[]>;

  constructor(readonly store: Store, readonly schedulerService: SchedulerService) { }

  ngOnInit(): void {
    // const toto = this.schedulerService.getLessons().subscribe();
    // console.log(toto);
    
    this.store.dispatch(SchedulerActionsGroup.loadAllLessons());
    this.lessons$ = this.store.select(getSchedulers);
  }

}
