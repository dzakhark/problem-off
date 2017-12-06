import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../../shared/classes/userInfo';
import {UserService} from '../../shared/services/user.service';
import {CanDeactivateGuard} from '../../shared/guards/can-deactivate-guard.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit, CanDeactivateGuard {

  userInformation: UserInfo;
  saved = false;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.userService.getUserInfo('https://problemoff.herokuapp.com/api/account/').subscribe(
      data => this.userInformation = data,
      error => console.log(error)
    );
  }

  checkDate(): boolean {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();
    const date = new Date(this.userInformation.dateBirthday);
    console.log(today);
    if (date.valueOf() >= today) {
      console.log('Неверная дата');
      return false;
    }
    return true;
  }

  onSubmit() {
    if (this.checkDate()) {
      this.saved = true;
      console.log('Edited');
      console.log(this.userInformation);
      console.log(this.userInformation._links['self']['href']);
      this.router.navigate(['/cabinet/info']);
      // this.userService.updateUserInfo(this.userInformation._links['self']['href']).subscribe(
      //   res => console.log(res),
      //   error => console.log(error)
      // );
    } else {
      console.log('Error');
    }
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (this.saved) {
      return true;
    }

    return confirm('Вы не сохранили изменения. Уйти со страницы?');
  }
}
