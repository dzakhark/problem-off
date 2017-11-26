import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule,
  AdminHeaderComponent,
  AdminHomeComponent,
  ManageServicesComponent,
  ManageUsersComponent
} from './index';
import {CategoriesService} from '../shared/services/categories.service';
import {CategoryListComponent} from './manage-services/category-list/category-list.component';
import {CategoryItemComponent} from './manage-services/category-item/category-item.component';
import {CategoryListDynamicComponent} from './manage-services/category-list-dynamic/category-list-dynamic.component';
import {SubCategoryListComponent} from './manage-services/sub-category-list/sub-category-list.component';

@NgModule({
  entryComponents: [
    SubCategoryListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminHomeComponent,
    ManageServicesComponent,
    ManageUsersComponent,
    AdminHeaderComponent,
    CategoryListComponent,
    CategoryItemComponent,
    CategoryListDynamicComponent,
    SubCategoryListComponent
  ],
  providers: [CategoriesService]
})
export class AdminModule { }
