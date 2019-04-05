import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewProductsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
