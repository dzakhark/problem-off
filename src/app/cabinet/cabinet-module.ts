import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CabinetInfoComponent} from './cabinet-info/cabinet-info.component';
import {CabinetRoutingModule} from './cabinet-routing.module';
import {UserService} from '../shared/services/user.service';
import {CabinetHomeComponent} from './cabinet-home/cabinet-home.component';
import {EditInfoComponent} from './edit-info/edit-info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CabinetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CabinetHomeComponent,
    CabinetInfoComponent,
    EditInfoComponent
  ],
  providers: [
    UserService
  ]
})
export class CabinetModule { }
