import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { UserRoleGuardService } from './shared/guards/user-role-guard.service';
import {AdminRoleGuardService} from './shared/guards/admin-role-guard.service';

// В данном примере настройки маршрутизации выделены в отдельный модуль.

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomeComponent, canActivate: [UserRoleGuardService]},
    { path: '**', component: ErrorComponent }
  ])],
  providers: [UserRoleGuardService, AdminRoleGuardService],
  exports: [RouterModule], // делаем re-export модуля для использования директив при маршрутизации
})
export class AppRoutingModule { }
