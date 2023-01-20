import { Component, OnDestroy } from '@angular/core';
import { faRupiahSign } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  // public title: string | undefined;
  public title!: string; // Raccoourcis pour écrire OR undefined
  private obs$: Observable<any>;
  private subj$: Subject<any>;
  private behav$: BehaviorSubject<any>;
  private sub: Subscription;

  constructor() {
    this.title = 'ngCrm';
    this.obs$ = new Observable((ListX) => {
      ListX.next(Math.random());
    });
    // this.obs$.subscribe((string) => console.log(string));
    // this.obs$.subscribe(console.log);

    this.subj$ = new Subject();

    this. sub = this.subj$.subscribe((data) => console.log(data));
    // this.subj$.next('toto');
    // this.subj$.next('toto2');
    // this.subj$.subscribe((data) => console.log(data));

    this.behav$ = new BehaviorSubject('toto');

    this.behav$.next('toto2');
    this.behav$.subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
