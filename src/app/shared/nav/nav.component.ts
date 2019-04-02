import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navbarShow = false;

  dropdownShow = false;
  mainCategory;
  selectedDropDown: string;
  selected: any;

  constructor() { }

  ngOnInit() {

  }
  toggleNavbar() {
    this.navbarShow = !this.navbarShow;
  }
  toggleDropdownLeave() {
    this.selectedDropDown = '';
    this.selected = '';
  }
  toggleLeave() {
    this.dropdownShow = !this.dropdownShow;
  }
 }