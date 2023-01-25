import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateClient } from '../../enums/state-client';
import { Client } from '../../models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent {

  public headers: string[];
  public clients$!: Client[];
  public states: string[];

  constructor(private clientService: ClientsService, private router: Router) {
    this.headers = ['Nom', 'CA', 'TVA', 'Etat', 'Commentaire', 'Actions']

    this.states = Object.values(StateClient);

    // this.clients$ = this.clientService.collection$;
    this.clientService.collection$.subscribe((data) => {
      this.clients$ = data;
    })
  }

  public updateState(client: Client, event: any): void {
    const state = event.target.value;
    this.clientService.changeState(client, state).subscribe((data) => {
      Object.assign(client, data)
    })
  }

  public goToEdit(id: any): void {
    this.router.navigate(['clients/edit/' + id]);
  }
}

