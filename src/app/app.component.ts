import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { Client } from './client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  isLoading :boolean = true;

  lista : Client [] = []

  constructor(private api : ApiService){}

  ngOnInit(): void {
    this.getClient();
  }

  newClient(): void{
    this.isLoading =  true;
    this.api.addCient({name: 'teste', email: 'email@email.com'});
    this.getClient();
  }

  getClient (): void{
    this.api.getClients().then(data => {
      this.isLoading = !this.isLoading;
      this.lista = data;
    }); 
  }
}
