import { RootActions } from './state/root.action';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Scheduler';

  constructor(readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(RootActions.initApp());
  }

}
