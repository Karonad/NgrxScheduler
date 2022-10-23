import { Lesson } from './../models/lesson.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiHttpService } from '../../api/api-http.service';
import { HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  constructor(readonly apiHttpService: ApiHttpService) { }

  public getLessons(): Observable<any> {
    return this.apiHttpService.get('/data.json');
  }

}
