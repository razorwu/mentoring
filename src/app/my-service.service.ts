import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class MyServiceService {

  data$ = new BehaviorSubject('idle');
  constructor() { }

  post(value: string) {
    this.data$.next(value);
  }
}
