import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CabinetInfoComponent } from './cabinet-info/cabinet-info.component';
import { WithAuthGuardService } from '../shared/guards/with-auth-guard.service';
import { CabinetHomeComponent } from './cabinet-home/cabinet-home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'cabinet',
        component: CabinetHomeComponent,
        // canActivate: [WithAuthGuardService],
        children: [
          {
            path: '',
            children: [
              { path: 'info', component: CabinetInfoComponent}
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [WithAuthGuardService]
})
export class CabinetRoutingModule { }
