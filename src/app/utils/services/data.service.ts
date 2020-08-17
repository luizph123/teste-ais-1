import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Card } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private dataSource = new BehaviorSubject(new Card());
  data = this.dataSource.asObservable();

  constructor() {}

  setData(data: Card) {
    this.dataSource.next(data);
  }
}
