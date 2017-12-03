import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CabinetInfoComponent} from './cabinet-info/cabinet-info.component';
import {CabinetRoutingModule} from './cabinet-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CabinetRoutingModule
  ],
  declarations: [
    CabinetInfoComponent
  ]
})
export class CabinetModule { }
