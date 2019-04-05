import { Component, OnInit , ViewChild} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Product} from './product.model';
import {ProductSettings} from './productSettings.model';
import {ProductService} from '../product.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';


@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  productModel: any;
  productSettingsModel: ProductSettings;
  selectedSortVal;
  sortBy = [{
    type: 'lowtohigh',
    value: 'Price - Low To High'
  }, {
    type: 'hightolow',
    value: 'Price -  High To Low'
  }];
  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.viewAllProducts();
    /* this.getFilterMenu(); */
  }
viewAllProducts() {
this.productService.getAllProducts().subscribe(data => {
  this.productModel = data;
  this.getFilterMenu();
}, err => {
  console.log(err);
});
 }

 getFilterMenu() {
  this.productService.getFilterData().subscribe(data => {
    console.log('filter menu', data);
    this.productSettingsModel = data;
  }, err => {
    console.log(err);
  });
}
sortType(val) {
  this.selectedSortVal = val;
  localStorage.setItem('productSortType', val);
  if (val === 'lowtohigh') {
    this.lowToHigh();
  } else if (val === 'hightolow') {
    this.highToLow();
  }
}
highToLow() {
  this.productModel.sort((a, b) => {
    return b.price - a.price;
  });
}
lowToHigh() {

  this.productModel.sort((a, b) => {
    return a.price - b.price;
  });
}
}
