import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginUser } from '../shared/classes/loginUser';
import { AuthService } from '../shared/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isDisable = false;
  loginForm: FormGroup;
  loginInfo: LoginUser = new LoginUser('', '');
  loginError = false;
  constructor(private router: Router,
              private fb: FormBuilder,
              private service: AuthService,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.loginForm = this.fb.group({
      login: [this.loginInfo.login, Validators.required],
      password: [this.loginInfo.password, Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      event.preventDefault();
      this.loginError = true;
    } else {
      this.loginInfo.login = this.loginForm.value.login;
      this.loginInfo.password = this.loginForm.value.password;
      // this.isDisable = true;
      this.service.loggedIn(this.loginInfo).subscribe(
        (res) => {
          this.loginError = false;
          console.log(res['_body']);
          // this.service.roles = JSON.parse(res['_body']).roles;
          // console.log(this.service.roles);
          // localStorage.setItem('roles', JSON.stringify(this.service.roles));
          const token = res.headers.get('X-Auth-Token');
          // localStorage.setItem('currentUser', JSON.stringify(token));
          this.cookieService.set('_curUser', JSON.stringify(token));
          this.cookieService.set('_opt', res['_body']);
          // this.service.decodeOptions(this.cookieService.get('_opt'));
          this.service.isLoggedIn = this.service.checkLogin();
          this.goToHome();
          // console.log(this.service.isLoggedIn);
          // console.log(token);
          // this.service.getUser().subscribe(
          //   (res) => {
          //     // console.log(res);
          //     this.goToHome();
          //   },
          //   (error) => {
          //     console.log(error);
          //     this.isDisable = false;
          //   }
          // );
        },
        (error) => {
          console.log(`Error in login: ${error}`);
          this.loginInfo.password = '';
          this.buildForm();
          this.loginError = true;
        }
      );
    }
  }

  public goToHome() {
    this.router.navigate(['/']);
  }

  public goToRegistration() {
    this.router.navigate(['/registration']);
  }
}
