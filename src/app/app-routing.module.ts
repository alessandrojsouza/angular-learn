import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './views/products/products.component';
import { AboutComponent } from './views/about/about.component';

const routes: Routes = [
  {path:'products', component: ProductsComponent},
  {path:'about',component:AboutComponent},
  {path:'search',component:ProductsComponent},
  {path:'delete/:id',component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
