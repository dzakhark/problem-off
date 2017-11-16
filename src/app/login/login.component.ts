import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginUser } from '../shared/classes/loginUser';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isDisable = false;
  loginForm: FormGroup;
  // loginInfo: LoginUser1 = new LoginUserBuilder().login('8').password('5');
  loginInfo: LoginUser = new LoginUser('', '');
  loginError = false;
  constructor(private router: Router,
              private fb: FormBuilder,
              private service: AuthService) { }

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
      this.isDisable = true;
      this.service.onLogIn(this.loginInfo).subscribe(
        (responce) => {
          this.loginError = false;
          // console.log(JSON.parse(responce['_body']).roles);
          this.service.roles = JSON.parse(responce['_body']).roles;
          // console.log(JSON.stringify(this.service.roles));
          localStorage.setItem('roles', JSON.stringify(this.service.roles));
          const token = responce.headers.get('X-Auth-Token');
          localStorage.setItem('currentUser', JSON.stringify({token: token }));
          this.service.writeDownLogin();
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
        error => {
          // console.log(error);
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
