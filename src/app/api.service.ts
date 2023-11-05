import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://3.128.249.166:8000/api/clients/';

  constructor() { }

  //adicionar um cliente
  async addCient(client: Client): Promise<Client>{
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(client)
    });
    const data = await response.json();
    return data;
  }

  //recuperar todos os clientes
  async getClients(): Promise<Client[]>{
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
}
