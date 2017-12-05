import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CabinetInfoComponent} from './cabinet-info/cabinet-info.component';
import {CabinetRoutingModule} from './cabinet-routing.module';
import {UserService} from '../shared/services/user.service';
import {CabinetHomeComponent} from './cabinet-home/cabinet-home.component';

@NgModule({
  imports: [
    CommonModule,
    CabinetRoutingModule
  ],
  declarations: [
    CabinetHomeComponent,
    CabinetInfoComponent
  ],
  providers: [
    UserService
  ]
})
export class CabinetModule { }
