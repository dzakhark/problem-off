import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CabinetInfoComponent } from './cabinet-info/cabinet-info.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'cabinet/info', component: CabinetInfoComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CabinetRoutingModule { }
