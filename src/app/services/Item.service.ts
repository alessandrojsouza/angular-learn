import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url = 'http://3.128.249.166:8000/api/';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + 'itens/');
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(this.url + 'itens/' + id + '/');
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.url + 'itens/', item);
  } 
  
  deleteItem(id: number): Observable<Item> {
    return this.http.delete<Item>(this.url + 'itens/' + id + '/');
  }

}
