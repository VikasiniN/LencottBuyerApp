import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewProductsComponent } from './view-products/view-products.component';
import {ViewSingleProductComponent} from './view-single-product/view-single-product.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewProductsComponent
  },
  {
    path: 'productdetail/:id',
    component: ViewSingleProductComponent
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
