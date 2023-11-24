import { Component, OnInit } from '@angular/core';
import { ItemService } from './services/Item.service';
import { Item } from './model/Item';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  items: Item[] = [];

  item : Item = {id: 0, name: '', description:''};

  constructor(private service: ItemService) {}

  onSubmit(f : NgForm) {
    //let item = new Item();
    this.item.name = f.value.name;
    this.item.description = f.value.description;
    this.service.createItem(this.item).subscribe(data => {
      console.log(data);
      this.items.push(data);
    });
  }

  //recuperar os itens do backend
  ngOnInit() {
    this.service.getItems().subscribe( data => this.items = data);
  }

  //excluir um item do backend
  excluirItem(id : number) {
    this.service.deleteItem(id).subscribe(
      data => {
        console.log(data);
        this.items = this.items.filter(item => item.id != id);
      });
    }
}