import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path:'products', component: ProductsComponent},
  {path:'about',component:AboutComponent},
  {path:'detailProduct:id',component:AppComponent},
  {path:'delete',component:AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
