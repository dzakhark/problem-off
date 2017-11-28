import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/services/categories.service';
import { Categories } from '../shared/classes/categories';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categoriesArray = [];

  constructor(private service: CategoriesService) { }

  ngOnInit() {
    this.getCategories();
   
  }
  categories: Categories[];
  errorMessage: string;
  ngAfterViewChecked() {
    $(document).mouseover(function (e) {
      var container = $("#hide");
      if (container.has(e.target).length === 0){
       $("ul.category:not(:first)").remove();
        }
  });
}

  getCategories() {
    this.service.getCategories().subscribe(
        categories => {
          this.categories = categories;
          let array: Categories[] = [];
          for (let i = 0; i < categories.length; i++) {
            array.push(categories[i]);
          }
          this.categoriesArray[0] = array;
          console.log(this.categories[0]);
        },
        error => this.errorMessage = error
    );
    
  }
 
    
  

  goToSubCategory(category: Categories, index: number) {
    console.log(index);
    console.log(category.subCategories);
    this.categoriesArray.splice(index + 1);
    this.categoriesArray[index + 1] = category.subCategories;
    if(document.getElementsByClassName('category').length == 1) {
      this.getCategories();
    }
    
  }

  
}

