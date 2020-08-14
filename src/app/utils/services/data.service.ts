import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data = new Subject<any>();

  constructor() {}

  getData(): Observable<any> {
    return this.data.asObservable();
  }

  setData(data: any) {
    this.data.next(data);
  }
}
