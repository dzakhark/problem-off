import { Component, OnInit } from '@angular/core';
import {Category} from "../../shared/classes/category";
import {CategoriesService} from "../../shared/services/categories.service";

@Component({
  selector: 'app-manage-services',
  templateUrl: './manage-services.component.html',
  styleUrls: ['./manage-services.component.css']
})
export class ManageServicesComponent implements OnInit {

  categories: Category[];

  constructor(private categoriesServices: CategoriesService) { }

  ngOnInit() {
    this.getCategory();
  }

  public getCategory() {
    this.categoriesServices.getServices().subscribe(
      categories => {
        this.categories = categories;
        // console.log(this.categories[0].subCategories);
      },
      error => console.log(error)
    );
  }

}
