import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { BehaviorSubject, map, Observable, Subject, Subscription, switchMap } from 'rxjs';
import { FormOrderComponent } from '../../components/form-order/form-order.component';
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
  public orders$!: BehaviorSubject<Order[]>;
  public states: string[];
  // public newOrders!: BehaviorSubject<Order[]>;
  public newOrders$ = new Subject();


  constructor(private ordersService: OrdersService, private router: Router, private route: ActivatedRoute) {
    this.orders$ = this.ordersService.collection$;
    this.states = Object.values(StateOrder);
    this.headers = ['Type', 'Client', 'Jours', 'Tjm HT', 'Total HT', 'Total TTC', 'State', 'Actions']
    this.newOrders$.next(this.orders$);
  }

  public changeState(order: Order, event: any): void {
    const state = event.target.value;
    this.ordersService.changeState(order, state).subscribe((data) => {
      Object.assign(order, data);
    })
  }

  public goToEdit(id: any): void {
    this.router.navigate(['orders/edit/' + id])
  }

  public goToDelete(id: any): void {
    this.ordersService.deleteById(id).subscribe(() => {
      this.newOrders$.next(this.orders$);
    });

  }
}

