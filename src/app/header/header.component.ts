import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
              public authService: AuthService) { }

  ngOnInit() {
  }
  goToLogin() {
    // console.log(this.authService.checkLogin());
    console.log(this.authService.isLogin);
    this.router.navigate(['/login']); // перенаправляем пользователя на PhraseListComponent
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
