import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { ErrorComponent } from './error/error.component';

// В данном примере настройки маршрутизации выделены в отдельный модуль.

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
    { path: 'registration', component: RegistrationComponent, canActivate: [AuthGuardService] },
    { path: '**', component: ErrorComponent }
  ])],
  exports: [RouterModule] // делаем re-export модуля для использования директив при маршрутизации
})
export class AppRoutingModule { }
