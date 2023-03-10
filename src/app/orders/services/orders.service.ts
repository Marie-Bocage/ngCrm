import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, switchMap, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { StateOrder } from '../enums/state-order';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private urlApi: string;
  public collection$: BehaviorSubject<Order[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;

    this.collection$ = new BehaviorSubject<Order[]>([]);
    this.refreshCollection();
  }

  public refreshCollection(): void {
    this.httpClient.get<Order[]>(`${this.urlApi}/orders`).subscribe((data) => {
      this.collection$.next(data);
    });
  }

  public changeState(order: Order, state: StateOrder): Observable<Order> {
    const item = new Order(order);
    item.state = state;
    return this.update(item);
  }

  public update(order: Order): Observable<Order> {
    return this.httpClient.put<Order>(`${this.urlApi}/orders/${order.id}`, order).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public add(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.urlApi}/orders`, order).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public getItemById(id: String): Observable<Order> {
    return this.httpClient.get<Order>(`${this.urlApi}/orders/${id}`);
  }

  public deleteById(id: String): Observable<Order> {
    return this.httpClient.delete<Order>(`${this.urlApi}/orders/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }
}
