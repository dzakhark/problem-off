import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CabinetInfoComponent } from './cabinet-info/cabinet-info.component';
// import {UserRoleGuardService} from '../shared/guards/user-role-guard.service';
// import {AuthGuardService} from '../shared/guards/auth-guard.service';
import {WithAuthGuardService} from '../shared/guards/with-auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'cabinet/info', component: CabinetInfoComponent, canActivate: [WithAuthGuardService]}
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [WithAuthGuardService]
})
export class CabinetRoutingModule { }
