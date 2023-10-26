import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  lista :  Product[] = [];
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if(id != null){
        this.lista = this.lista.filter(item => console.log(item.id != Number(id)));
      }
      else
        this.lista = [
          {id:1,name:'Caneta',price:100,stock:10},
          {id:2,name:'Livro',price:200,stock:20},
          {id:3,name:'Caderno',price:300,stock:30},
        ];
    })
  }

  delete(){

  }

  onChange(value:string){
    if(value == '')
      this.lista = [
        {id:1,name:'Caneta',price:100,stock:10},
        {id:2,name:'Livro',price:200,stock:20},
        {id:3,name:'Caderno',price:300,stock:30},
      ];
  }

  find(value:string){
     //filtrar se o campo estiver preenchido
    if(value != '')
      this.lista = this.lista.filter(x => x.name.toLowerCase().includes(value.toLowerCase()));
  }

}
