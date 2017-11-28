import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnChanges,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import {CategoriesService} from '../../shared/services/categories.service';
import {Category} from '../../shared/classes/category';

@Component({
  selector: 'app-manage-services',
  templateUrl: './manage-services.component.html',
  styleUrls: ['./manage-services.component.css']
})
export class ManageServicesComponent implements OnInit, AfterViewChecked {

  mainCategories: Category[];
  categories: Category[];
  selectCategory = new Category('Главные', [], this.mainCategories, []);

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getCategory();
  }

  // ngDoCheck() {
  //   this.refresh();
  // }
  //
  // ngAfterViewInit(): void {
  //   this.refresh();
  // }
  //
  ngAfterViewChecked(): void {
    console.log('isModify: ' + this.categoriesService.isModify);
    if (this.categoriesService.isModify) {
      this.getCategory();
      this.categoriesService.isModify = false;
    }
  }
  //
  // ngAfterContentChecked(): void {
  //   if (this.categoriesService.isModify) {
  //     this.getCategory();
  //     this.categoriesService.isModify = false;
  //   }
  // }
  //
  // ngAfterContentInit(): void {
  //   if (this.categoriesService.isModify) {
  //     this.getCategory();
  //     this.categoriesService.isModify = false;
  //   }
  // }
  //
  // ngOnChanges(changes: SimpleChanges): void {
  //   if (this.categoriesService.isModify) {
  //     this.getCategory();
  //     this.categoriesService.isModify = false;
  //   }
  // }

  public getCategory() {
    this.categoriesService.getServices().subscribe(
      categories => {
        this.categories = categories;
        this.mainCategories = categories;
      },
      error => console.log(error)
    );
  }

  goToSubCategory(category) {
    if (category.name === 'Главные') {
      this.categories = this.mainCategories;
      this.selectCategory = new Category('Главные', [], this.mainCategories, []);
    } else {
      this.selectCategory = category;
      this.categories = category.subCategories;
    }
  }
}
