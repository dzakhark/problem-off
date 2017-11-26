import {Component, Injector, OnInit} from '@angular/core';
import {Category} from "../../../shared/classes/category";

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.css']
})
export class SubCategoryListComponent implements OnInit {

  upCategory: Category;
  categories: Category[];

  constructor(private injector: Injector) {
    this.categories = this.injector.get('categories');
    this.upCategory = this.injector.get('upCategory');
  }

  ngOnInit() {
  }

}
