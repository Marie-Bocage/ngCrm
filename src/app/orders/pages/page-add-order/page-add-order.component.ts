import { Component } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent {
  public order: Order;

  constructor() {
    this.order = new Order();
  }
}
