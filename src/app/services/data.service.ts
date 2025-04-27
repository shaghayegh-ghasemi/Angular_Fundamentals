import { Injectable } from '@angular/core';
import { interval, map, Observable, share, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private stop = new Subject<void>();

  constructor() { }

  getRandomNumber(): Observable<number> {
    return interval(2000).pipe(
      takeUntil(this.stop),
      map(() => Math.floor(Math.random() * 100)),
      share()
    );
  }

  stopStream() {
    this.stop.next();
    this.stop = new Subject<void>();
  }
}
