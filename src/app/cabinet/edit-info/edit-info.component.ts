import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../../shared/classes/userInfo';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

  userInformation: UserInfo;

  constructor(private userService: UserService) { }

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

  doChanges() {
    if (this.checkDate()) {
      console.log('Edited');
      console.log(this.userInformation);
    } else {
      console.log('Error');
    }
  }
}
