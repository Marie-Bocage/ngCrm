import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { StateOrder } from '../../enums/state-order';
import { Order } from '../../models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent {
  public item$!: Observable<Order>;

  public oldOrder!: Order;
  public states: string[];

  constructor(private ordersService: OrdersService, private route: ActivatedRoute, private router: Router) {
    this.states = Object.values(StateOrder);
    const id: Observable<String> = this.route.params.pipe(map(p => p['id']))
    id.subscribe((data) => {
      this.item$ = this.ordersService.getItemById(data);
    })

    this.item$.subscribe((param) => {
      this.oldOrder = new Order(param);
    })
  }

  public action(order: Order): void {
    this.ordersService.update(order).subscribe(() => {
      this.router.navigate(['orders'])
    })
  }
}
