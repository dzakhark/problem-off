import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { RegistrationService } from './shared/services/registration.service';
import {HttpModule} from '@angular/http';
import { CategoriesService } from './shared/services/categories.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { ErrorComponent } from './error/error.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TextMaskModule
  ],
  providers: [RegistrationService, AuthService, AuthGuardService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
