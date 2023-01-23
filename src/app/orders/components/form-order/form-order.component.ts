import { Component, Input } from '@angular/core';
import { StateOrder } from '../../enums/state-order';
import { Order } from '../../models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent {
  @Input() public init!: Order;

  public states: string[];

  constructor() {
    this.states = Object.values(StateOrder);
  }

}
