import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  serverUrl = 'http://localhost:4200/assets';

  constructor(
    // Angular Modules
    private http: HttpClient
  ) {}
  public get(urlParams: string, options?: any) : Observable<any> {
    const url = this.serverUrl + urlParams;
    console.log(url);
    
    return this.http.get<any>(url, options);
  }
  public post(urlParams: string, data: any, options?: any) {
    return this.http.post(this.serverUrl + urlParams, data, options);
  }
  public put(urlParams: string, data: any, options?: any) {
    return this.http.put(this.serverUrl + urlParams, data, options);
  }
  public delete(urlParams: string, options?: any) {
    return this.http.delete(this.serverUrl + urlParams, options);
  }
}
