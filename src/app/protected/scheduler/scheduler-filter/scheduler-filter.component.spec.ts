import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerFilterComponent } from './scheduler-filter.component';

describe('SchedulerFilterComponent', () => {
  let component: SchedulerFilterComponent;
  let fixture: ComponentFixture<SchedulerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
