import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  public numVersion$: BehaviorSubject<number>;

  constructor() {
    this.numVersion$ = new BehaviorSubject(1);
  }

  public increment(): void {
    // this.numVersion$.subscribe((version) => {
    //   this.numVersion$.next(version+1)
    // })
    this.numVersion$.next(this.numVersion$.value + 1); // Value est une valeur en dure qui ne récupère pas les modifications, donc ne peut pas être utilisée dans header/footer
  }
}
