import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageServicesComponent } from './manage-services/manage-services.component';
import { ManageUsersComponent} from './manage-users/manage-users.component';
import {AdminHeaderComponent} from './admin-header/admin-header.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminHomeComponent,
    ManageServicesComponent,
    ManageUsersComponent,
    AdminHeaderComponent
  ]
})
export class AdminModule { }
