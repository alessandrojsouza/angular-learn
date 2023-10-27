import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  lista :  Product[] = [

  ];

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //pegar o parametro da rota
    this.lista = [
      {id:1,name:'Caneta',price:100,stock:10},
      {id:2,name:'Livro',price:200,stock:20},
      {id:3,name:'Caderno',price:300,stock:30},
    ]
    console.log('ngOnInit');
    this.delete();
    this.find();
  }


  onChange(value:string){
    if(value == '')
      this.lista = [
        {id:1,name:'Caneta',price:100,stock:10},
        {id:2,name:'Livro',price:200,stock:20},
        {id:3,name:'Caderno',price:300,stock:30},
      ];
  }
  //Pesquisar por nome
  find(){
    console.log('find');
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
    console.log('delete');
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if(id != null){
        this.lista = this.lista.filter(item => item.id !== Number(id));
      }
    });
  }
}
