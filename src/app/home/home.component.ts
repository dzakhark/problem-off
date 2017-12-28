import { Component, OnInit} from '@angular/core';
import { CategoriesService } from '../shared/services/categories.service';
import { Category } from '../shared/classes/category';
import { Data } from '../shared/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = new Data();
  categoriesArray = [];
  categories: Category[];
  errorMessage: string;
  request;
  requestIntervalTime = 10000;
  errorRequestIntervalTime = 2000;

  constructor(private service: CategoriesService) { }

  ngOnInit() {
    this.getCategories();
  }

  hideList() {
    console.log(this.categoriesArray.length);
    this.categoriesArray.splice(1);
  }

  getViewAll(len: number, index: number) {
    if (len === 0) {
      this.categoriesArray.splice(index + 1);
    }
  }

  doError() {
    this.data.apiLinks.user.getCategories = this.data.apiLinks.user.getCategories + 'aaa';
    console.log(this.data.apiLinks.user.getCategories);
  }

  fixError() {
    this.data.apiLinks.user.getCategories = this.data.apiLinks.user.getCategories.slice(0, -3);
    console.log(this.data.apiLinks.user.getCategories);
  }

  getCategories() {
    this.service.getCategories(this.data.apiLinks.user.getCategories).subscribe(
        categories => {
          this.request = setTimeout(() => this.getCategories(), this.requestIntervalTime);
          console.log(new Date());
          this.categories = categories;
          const array: Category[] = [];
          for (let i = 0; i < categories.length; i++) {
            array.push(categories[i]);
          }
          this.categoriesArray[0] = array;
        },
        error => {
          console.log('Time of error: ' + new Date());
          clearTimeout(this.request);
          this.request = setInterval(() => this.getCategories(), this.errorRequestIntervalTime);
          this.errorRequestIntervalTime *= Math.E;
          this.errorMessage = error;
        }
    );
  }

  goToSubCategory(category: Category, index: number) {
    this.categoriesArray.splice(index + 1);
    this.categoriesArray[index + 1] = category.subCategories;
  }
}

