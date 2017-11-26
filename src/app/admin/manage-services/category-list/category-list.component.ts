import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../shared/classes/category';
import {CategoriesService} from '../../../shared/services/categories.service';
import {SubCategoryListComponent} from '../sub-category-list/sub-category-list.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  componentData = null;
  @Input()
  upCategory: Category;
  @Input()
  inputCategories: Category[];

  idSelect: number;

  constructor() { }

  ngOnInit() {
  }

  createSubCategoryList(category) {
    this.idSelect = this.inputCategories.indexOf(category);
    console.log(this.idSelect);
    this.componentData = {
      component: SubCategoryListComponent,
      inputs: {
        upCategory: category,
        categories: category.subCategories
      }
    };
  }

}
