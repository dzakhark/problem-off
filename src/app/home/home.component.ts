import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/services/categories.service';
import { Categories } from '../shared/classes/categories';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: CategoriesService) { }

  ngOnInit() {
  }
  categories: Categories[];
  errorMessage: string;
  getCategories() {
    this.service.getCategories().subscribe(
        categories => this.categories = categories,
        error => this.errorMessage = error
    );
    console.log(this.categories)
  }
}

