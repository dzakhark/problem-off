import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageServicesComponent } from './manage-services/manage-services.component';
import { AdminRoleGuardService } from '../shared/guards/admin-role-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        children: [
          { path: '', component: AdminHomeComponent, canActivate: [AdminRoleGuardService] },
          { path: 'services', component: ManageServicesComponent }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [AdminRoleGuardService]
})
export class AdminRoutingModule { }
