import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Client } from '../../models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent {

  public item$!: Observable<Client>;

  constructor(private clientsService: ClientsService, private route: ActivatedRoute, private router: Router) {
    const id: Observable<String> = this.route.params.pipe(map(p => p['id']));
    id.subscribe((data) => {
      this.item$ = this.clientsService.getItemById(data);
    })
  }

  public action(client: Client): void {
    this.clientsService.update(client).subscribe(() => {
      this.router.navigate(['clients'])
    })
  }
}
