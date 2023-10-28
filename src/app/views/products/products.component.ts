import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  parm : string = ''

  lista :  Product[] = [
    {id:1,name:'Caneta',price:100,stock:10},
    {id:2,name:'Livro',price:200,stock:20},
    {id:3,name:'Caderno',price:300,stock:30},
  ];

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.delete();
    this.find();
  }

  //Pesquisar por nome
  find(){
    this.route.queryParams.subscribe(params => {
      let filter = params['filter'];
      if(filter != null){
        console.log('filter', filter);
        this.lista = this.lista.filter(x => x.name.toLowerCase().includes(filter.toLowerCase()));
      }
    });
  }
  //Metodo para deletar
  delete(){
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if(id != null){
        console.log('delete', id);
        this.lista = this.lista.filter(item => item.id !== Number(id));
      }
    });
  }
}
