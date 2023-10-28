import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductsComponent } from './views/products/products.component';
import { AboutComponent } from './views/about/about.component';
import { FormsModule } from '@angular/forms';
import { InputFindComponent } from './views/products/components/input-find/input-find.component';
import { DataProductsComponent } from './views/products/components/data-products/data-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    AboutComponent,
    InputFindComponent,
    DataProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
