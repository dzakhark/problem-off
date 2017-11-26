import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from "../../../shared/classes/category";

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input()
  category: Category;
  @Output()
  select = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.select.emit(this.category);
  }

}
