import {
  AfterContentChecked, AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit,
  Output
} from '@angular/core';
import {Category} from '../../../shared/classes/category';
import {CategoriesService} from '../../../shared/services/categories.service';


@Component({
  selector: 'app-category-breadcrumb',
  templateUrl: './category-breadcrumb.component.html',
  styleUrls: ['./category-breadcrumb.component.css']
})
export class CategoryBreadcrumbComponent implements OnInit, OnChanges, AfterContentChecked {

  @Input()
  inputCategory: Category;
  @Output()
  selectInBreadcrumb = new EventEmitter();
  breadcrumbList: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
  }

  selectCategoryName(category: Category) {
    // console.log(category);
    if (!category) {
      this.selectInBreadcrumb.emit('MAIN');
      this.breadcrumbList.splice(1);
      // console.log(this.breadcrumbList);
      // console.log(`${this.breadcrumbList}`);
    } else {
      const index = this.breadcrumbList.indexOf(category);
      console.log(index);
      if (index !== -1) {
        if (index === this.breadcrumbList.length - 1) {
          return ;
        } else {
          this.breadcrumbList.splice(index);
          this.selectInBreadcrumb.emit(category);
        }
      }
    }
  }

  ngOnChanges() {
    this.breadcrumbList.push(this.inputCategory);
    // console.log(`${this.breadcrumbList.length}`);
  }

  // ngAfterViewInit() {
    // console.log('isModifyForBreadcrumb: ' + this.categoriesService.isModifyForBreadcrumb);
    // if (this.categoriesService.isModifyForBreadcrumb) {
    //   this.breadcrumbList.splice(1);
    //   this.categoriesService.isModifyForBreadcrumb = false;
    // }
  // }

  ngAfterContentChecked() {
    console.log('isModify: ' + this.categoriesService.isModify);
    if (this.categoriesService.isModifyForBreadcrumb) {
      this.breadcrumbList.splice(1);
      this.categoriesService.isModifyForBreadcrumb = false;
    }
  }
}
