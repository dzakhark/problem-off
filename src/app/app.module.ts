import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TextMaskModule } from 'angular2-text-mask';
import { LoginRoutingModule } from './login/login-routing.module';
import { RegistrationRoutingModule } from './registration/registration-routing.module';
import { AdminModule } from './admin/admin-module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';



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
    AdminModule,
    LoginRoutingModule,
    RegistrationRoutingModule,
    AppRoutingModule,
    TextMaskModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
