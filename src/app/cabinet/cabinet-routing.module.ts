import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CabinetInfoComponent } from './cabinet-info/cabinet-info.component';
import { WithAuthGuardService } from '../shared/guards/with-auth-guard.service';
import { CabinetHomeComponent } from './cabinet-home/cabinet-home.component';
import {EditInfoComponent} from './edit-info/edit-info.component';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate-guard.service';

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
              { path: 'info', component: CabinetInfoComponent },
              { path: 'info/edit', component: EditInfoComponent, canDeactivate: [CanDeactivateGuard]}
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [WithAuthGuardService, CanDeactivateGuard]
})
export class CabinetRoutingModule { }
