import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ModelComponent } from './model/model.component';

const routes: Routes = [
  { path: 'template', component: TemplateComponent },
  { path: 'model', component: ModelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
