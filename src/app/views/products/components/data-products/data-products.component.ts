import { Component, Input } from '@angular/core';

import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-data-products',
  templateUrl: './data-products.component.html',
  styleUrls: ['./data-products.component.css']
})
export class DataProductsComponent {
  @Input() lista : Product[] = [];
}
