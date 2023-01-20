import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from '../../enums/state-order';
import { Order } from '../../models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent {

  public headers: string[];
  public orders$!: Observable<Order[]>;
  public states: string[];
  public redirection!: string;
  public nomLabel!: string;

  constructor(private ordersService: OrdersService) {
    this.orders$ = this.ordersService.collection$;
    this.states = Object.values(StateOrder);
    this.headers = ['Type', 'Client', 'Jours', 'Tjm HT', 'Total HT', 'Total TTC', 'State']

    // this.ordersService.collection$.subscribe((data) => {
    //   this.orders = data;
    // });
  }

  public changeState(order: Order, event: any): void {
    const state = event.target.value;
    this.ordersService.changeState(order, state).subscribe((data) => {
      Object.assign(order, data);
    })
  }
}
