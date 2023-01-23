import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { StateClient } from '../enums/state-client';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  public collection$: Observable<Client[]>;
  public urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;

    this.collection$ = this.httpClient.get<Client[]>(`${this.urlApi}/clients`);
  }

  public changeState(client: Client, state: StateClient): Observable<Client> {
    const item = new Client(client);
    item.state = state;
    return this.update(item);
  }

  public update(client: Client): Observable<Client> {
    return this.httpClient.put<Client>(`${this.urlApi}/clients/${client.id}`, client)
  }

  public add(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(`${this.urlApi}/clients`, client);
  }
}
